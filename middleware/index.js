const send = require('koa-send');

module.exports = function (app, router) {
    app.use(async function (ctx, next) {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
    });

    router.get('*', (ctx) => {
        send(ctx, '../dist/index.html');
    });
};