const mongoose = require('mongoose');
const name = "Product";

module.exports = {
    count: 500,
    name: name,
    shema: {
        productName: {
            type: String,
            // Шаблон для значений
            template: "{{commerce.productName}}"
        },
        price: {
            type: String,
            template: "{{commerce.price}}",
            // unique: true,
            // indexed: true
        },
        photos: [{
            type: String,
            template: "{{image.fashion}}"
        }],
        category: {
            type: String,
            template: "{{commerce.productAdjective}}"
        },
        material: {
            type: String,
            template: "{{commerce.productMaterial}}"
        },
        description: {
            type: String,
            template: "{{lorem.text}}"
        },
        company: {
            type: String,
            template: "{{company.companyName}}"
        }
    }
};