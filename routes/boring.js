const KoaRouter = require('@koa/router');

const boring = new KoaRouter({ prefix: '/boring' });

boring.get('/', (ctx) => {
  Object.assign(ctx, {
    status: 200,
    body: { success: true },
  })
});

boring.get('/error', (ctx) => {
  Object.assign(ctx, {
    status: 500,
    body: { success: false },
  })
});

module.exports = boring;
