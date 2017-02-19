const db = require('../db');
const colors = require('colors/safe');
const setValues = require('./setValues');

db().then(({models}) => {
    setValues(models).then(() => {
        console.log(colors.bold.green(`✔ all operations complete.`));
        console.log(colors.gray(`connection was closed.`));
        connect.close();
    });
}).catch(e => console.error(e));
