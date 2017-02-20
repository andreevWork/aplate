const db = require('./db');
const colors = require('colors/safe');
const graffiti = require('@risingstack/graffiti-mongoose');
const Router = require('koa-router');
const convert = require('koa-convert');
const graphqlHTTP = require('koa-graphql');
const Koa = require('koa');
const path = require('path');
const static_serve = require('koa-static');
const middlewares = require('./middlewares');

db().then(({models}) => {
    const app = new Koa();
    const router = new Router();
    const Schema = graffiti.getSchema(models);
    const static_dir = path.join(__dirname, 'dist');

    // Custom
    middlewares(app, router);

    app
        .use(static_serve(static_dir))
        .use(router.routes())
        .use(router.allowedMethods());


    router.all('/api', convert(graphqlHTTP({
        schema: Schema,
        graphiql: true
    })));
    
    app.listen(3000, () => {
        console.log(colors.bold.green(`✔ server start on ${3000}`));
    });
}).catch(e => console.log(e));
