const Router = require('koa-router');
const router = new Router({ prefix: '/api/product' });

router.post('/search', async function(ctx) {
  console.log(ctx.request.body);
  ctx.status = 201;
  ctx.body = { status: 'Successful' };
});

module.exports = router;
