const fs = require('mz/fs');
const mkdirp = require('mkdirp');
const path = require('path');
const colors = require('colors/safe');
const templates_dir = path.resolve(__dirname, './files');
const dir = getDirForFiles();

fs.readdir(templates_dir)
.then(files => {
    return Promise.all(
        files.map(filename => {
            return fs.readFile(path.resolve(templates_dir, filename), 'utf8')
                .then(data => ({
                    filename,
                    data
                }));
        })
    );
})
.then(files => {
    mkdirp.sync(dir);
    console.log(colors.bold.green(`✔ Directory ${dir} is created.`))
    return Promise.all(
        files.map(({filename, data}) => {
            return fs.writeFile(
                path.resolve(dir, filename),
                data
            ).then(() => console.log(colors.bold.green(`✔    File ${filename} is created.`)));
        })
    );
})
.then(() => console.log(colors.bold.green(`✔ All files created`)))
.catch(e => console.log(colors.bold.red(e)));



function getDirForFiles() {
    const dir = process.argv.slice(2)[0];

    if (!dir) {
        console.log(colors.bold.red('Error: Get path for files, in first argument.'));
        throw Error();
    }

    return path.resolve(__dirname, '../frontend', dir);
}