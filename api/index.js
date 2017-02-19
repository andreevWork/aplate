const db = require('./db');
const colors = require('colors/safe');
const graffiti = require('@risingstack/graffiti-mongoose');
const Router = require('koa-router');
const convert = require('koa-convert');
const graphqlHTTP = require('koa-graphql');
const Koa = require('koa');

db().then(({models}) => {
    const app = new Koa();
    const router = new Router();
    const Schema = graffiti.getSchema(models);

    app
        .use(router.routes())
        .use(router.allowedMethods());

    router.all('/', convert(graphqlHTTP({
        schema: Schema,
        graphiql: true
    })));
    
    app.listen(3000, () => {
        console.log(colors.bold.green(`✔ server start on ${3000}`));
    });
}).catch(e => console.log(e));
