const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mainRouter = require('./routes/main');

const app = new Koa();

app.use(BodyParser());
app.use(logger());

app.use(mainRouter.routes()).use(mainRouter.allowedMethods());

module.exports = app;