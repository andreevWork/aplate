module.exports = function (app, router) {
    app.use(async function (ctx, next) {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
    });

    router.get('/test_routes', (ctx) => {
        ctx.body = 'test';
    });

    app.use(async function (ctx, next) {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}`);
    });
};