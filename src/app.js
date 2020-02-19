const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const rootRouter = require('./routes/root');
const apiProductRouter = require('./routes/apiProduct');

const app = new Koa();

app.use(BodyParser());
app.use(logger());

app.use(rootRouter.routes()).use(rootRouter.allowedMethods());
app.use(apiProductRouter.routes()).use(apiProductRouter.allowedMethods());

module.exports = app.listen(process.env.PORT || '3000');
