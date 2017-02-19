const shemas = require('../shemas');
const faker = require('faker');

module.exports = {
    getReference(obj) {
        return obj && (obj.ref || ( obj[0] && obj[0].ref ));
    },
    
    getRandomElFromArray(arr, len) {
        return arr[Math.floor(Math.random() * len)];
    },

    getShemaByModelName(model_name) {
        return  shemas.find(({name}) => name === model_name);
    },

    getModelValues(shema) {
        let values = Object.keys(shema)
            .reduce((values, key) => {
                values[key] = this.getRandomValue(shema[key]);
                return values;
            }, {});

        return values;
    },

    getRandomValue(obj) {
        if (this.getReference(obj)) {
            return;
        }

        let {template} = obj;

        if (!template) {
            throw new Error(`Don\`t get template for value for ${obj.name} shema.`);
        }

        return faker.fake(template);
    }
};