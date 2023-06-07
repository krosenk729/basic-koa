const Koa = require('koa');
const boring = require('./boring');
const fun = require('./fun');

const app = new Koa();

// gobal error handling route
app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (error) {
        console.error('Unexpected route error', error);
        Object.assign(ctx, { status: 500 });
    }
});

// register routes
[fun, boring].forEach((r) => {
    app.use(r.routes());
    app.use(r.allowedMethods());
});

// fall-through route
app.use((ctx) => {
    Object.assign(ctx, {
        status: 404,
        body: 'you don\'t have to go home but you can\'t find a route here',
    })
});

exports.app = app;