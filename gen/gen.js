const fs = require('mz/fs');
const mkdirp = require('mkdirp');
const path = require('path');
const colors = require('colors/safe');
const templates_dir = path.resolve(__dirname, './files');
const main_filename = getFileName();
const dir = path.resolve(getDirForFiles(), main_filename);

fs.readdir(templates_dir)
.then(files => {
    return Promise.all(
        files.map(filename => fs.readFile(path.resolve(templates_dir, filename), 'utf8')
            .then(data => ({
                data,
                extension: filename.split('.').pop()
            })))
    );
})
.then(files => {
    mkdirp.sync(dir);
    console.log(colors.bold.green(`✔ Directory ${dir} is created.`));
    return Promise.all(
        files.map(({data, extension}) => {
            return fs.writeFile(
                path.resolve(dir, `${main_filename}.${extension}`),
                data
            )
        })
    );
})
.then(() => console.log(colors.bold.green(`✔ All files created`)))
.catch(e => console.log(colors.bold.red(e)));

function getFileName() {
    const file_name = process.argv.slice(2)[1];

    if (!file_name) {
        console.log(colors.bold.red('Error: Get dir name, in second argument.'));
        throw Error();
    }

    return file_name;
}

function getDirForFiles() {
    const dir = process.argv.slice(2)[0];

    if (!dir) {
        console.log(colors.bold.red('Error: Get path for files, in first argument.'));
        throw Error();
    }

    return path.resolve(__dirname, '../frontend', dir);
}