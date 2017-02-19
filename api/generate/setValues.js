const mongoose_utils = require('mongoose/lib/utils');
const helpers = require('./helpers');
const setReferences = require('./setReferences');
const colors = require('colors/safe');

//Словарь для записи всех id, чтобы потом использовать в простановке reference-ов
const entities = {};

module.exports = function (models) {
    return Promise.all(models.map(Model => {
        // Получаем схему и число записей, которое необходимо добавить
        let {shema, count} = helpers.getShemaByModelName(Model.modelName);
        
        entities[Model.modelName] = [];

        //Очищаем таблицу перед записью новый данных
        return Model.remove()
            .then(() => Promise.all(
                // Создаем по модели отдельные сущности
                Array.apply(null, {length: count})
                    .map(() => Model.create(helpers.getModelValues(shema)).then(data => entities[Model.modelName].push(data._id)))
            ))
            .then(() => {
                // Как все модели сохранятся выводим сообщение об успехе
                console.log(colors.bold.green(`✔ ${mongoose_utils.toCollectionName(Model.modelName)} collection created`));
                console.log(colors.cyan(`  |  ${count} documents created`));
            }).catch(e => console.error(e));
    }))
    .then(() => setReferences(models, entities))
    .catch(e => console.error(e));
};