const mongoose = require('mongoose');
const shemas = require('../shemas');

// Link in docer is deprecated
// https://docs.docker.com/compose/link-env-deprecated/
// const ip = process.env.MONGO_PORT_27017_TCP_ADDR || "127.0.0.1";
// const port = process.env.MONGO_PORT_27017_TCP_PORT || "27017";

module.exports = function () {
    mongoose.connect(`mongodb://mongo/api`);

    connect = mongoose.connection;
    
    return new Promise((res, rej) => {
        connect.once('open', () => {
            // Костыль, необходимо явно задать используемые промисы
            mongoose.Promise = global.Promise;
            // Создаем сразу все модели по схемам и передаем дальше
            let models = shemas.map(({shema, name}) => mongoose.model(name, new mongoose.Schema(shema)));
            //Промис возвращает объект с инстансом соединения и все моделями
            res({
                connect,
                models
            });
        });

        connect.on('error', rej);
    });
};
