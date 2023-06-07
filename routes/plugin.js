const boring = require('./boring');
const fun = require('./fun');

exports.plugin = (app) => {
    [fun, boring].forEach((r) => {
        app.use(r.routes());
    });
    
    // fall-through
    app.use((ctx) => {
        Object.assign(ctx, {
            status: 404,
            body: 'you don\'t have to go home but you can\'t find a route here',
        })
    });
};
