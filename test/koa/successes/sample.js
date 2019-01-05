const Koa = null;
const log = null;

export default function server() {
  const app = new Koa();
  // logger
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    log('%s %s - %s', ctx.method, ctx.url, ms);
  });
  // response
  app.use(async (ctx) => {
    ctx.body = 'Hello World';
  });
  app.listen(3000);
}
