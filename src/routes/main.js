const Router = require('koa-router');
const router = new Router();

router.get('/', async function(ctx) {
  ctx.status = 200;
  ctx.body = { serverStatus: 'Ok' };
});

module.exports = router;