const Router = require('koa-router');
const router = new Router();

router.get('/', async function(ctx) {
  ctx.body = { serverStatus: 'Ok' };
});

module.exports = router;