const Koa = require('koa');
const { routesPlugin } = require('./routes');

const PORT = 3000;

const app = new Koa();

routesPlugin(app);

app.listen(PORT, async () => {
  console.log(`🏃‍♀️🏃🏃‍♂️ Server started on port ${PORT}`);
});
