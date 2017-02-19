const path = require('path');
const dir = path.join(__dirname, '../', 'models');
const shemas = [];

require("fs").readdirSync(dir).forEach(function(file) {
    shemas.push(require(`${dir}/${file}`));
});


module.exports = shemas;