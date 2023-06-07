const KoaRouter = require('@koa/router');

const fun = new KoaRouter({ prefix: '/fun' });

fun.use(async (ctx, next) => {
  console.log('Hi there fun middleware', ctx.request);
  
  // two ways of getting headers from request
  const host = ctx.request.get('host') || ctx.request.header.host;
  if (process.env.NODE_ENV !== 'test' && host?.includes('127.0.0.1')) {
    return Object.assign(ctx, {
      status: 200,
      body: {
        headers: ctx.request.header,
      },
    });
  }
  await next();
});

fun.get('/', (ctx) => {
  Object.assign(ctx, {
    status: 200,
    body: { success: true },
  })
});

fun.get('/params', (ctx) => {
  const queryParams = ctx.request.query;
  Object.assign(ctx, {
    status: 200,
    body: { success: true, queryParams },
  })
});

fun.get('/path/:id', (ctx) => {
  const pathParams = ctx.params;
  Object.assign(ctx, {
    status: 200,
    body: { success: true, pathParams },
  })
});

module.exports = fun;
