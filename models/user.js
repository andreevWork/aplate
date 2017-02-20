const mongoose = require('mongoose');
const name = "Usere";

module.exports = {
    // Число записей в базе
    count: 50,
    // Имя модели в mongoose. Используется для определения связей, для построения запросов в grapgql.
    name: name,
    shema: {
        name: {
            type: String,
            // Шаблон для значений
            template: "{{name.lastName}} {{name.firstName}}",
            description: 'full name user'
        },
        email: {
            type: String,
            template: "{{internet.email}}",
            description: 'email from user',
            unique: true,
            indexed: true
        },
        // Добавили отношение, у каждого юзера будет массив с id других юзеров - его друзья
        friends: [{
            ref: name,
            type: mongoose.Schema.Types.ObjectId
        }]
    }
};