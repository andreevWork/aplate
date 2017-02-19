const helpers = require('./helpers');

module.exports = function (models, entities) {
    return Promise.all(models.map(Model => {
        let {shema} = helpers.getShemaByModelName(Model.modelName);

        // Необходимо пройтись по все ключам схемы и найти все reference
        return Promise.all(Object.keys(shema)
            .map(key => {
                const obj = shema[key];
                const ref = helpers.getReference(obj);
                const refs_ids = entities[ref];
                const refs_ids_len = refs_ids && refs_ids.length;

                // Если reference не найден сразу отбой
                if (!refs_ids || !refs_ids_len) {
                    return Promise.resolve();
                }

                // Если relation найден, необходимо всем элементам в этой модели проставить связующие ключи
                return Model.find()
                    .then(collection => Promise.all(
                        collection.map(({_id}) => {
                            // Создаем связь если она одна, либо если это отношение не один-один, тогда:
                            // Создаем рандомное число связей и записываем в каждую рандомный id
                            // Число связей от 0 - 10
                            // TODO: сделать число связей настраеваемым в схеме

                            const data = Array.isArray(obj) ?
                                Array.apply(null, {length: Math.floor(Math.random() * 10)})
                                    .map(() => helpers.getRandomElFromArray(refs_ids, refs_ids_len))
                                :
                                helpers.getRandomElFromArray(refs_ids, refs_ids_len);

                            return Model.findByIdAndUpdate(_id, {[key]: data}).exec()
                        })
                    ).catch(e => console.error(e)))
            })
        ).catch(e => console.error(e));
    })).catch(e => console.error(e));
};


