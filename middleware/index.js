const fs = require('fs');

module.exports = function (app, router) {
    app.use(async function (ctx, next) {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
    });

    router.get('*', (ctx) => {
        ctx.body = fs.readFileSync('./api/dist/index.html',  'utf-8');
    });
};
