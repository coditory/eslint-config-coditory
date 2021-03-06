const Koa = null;
const log = null;

export const allowNewLines = obj =>
  Array.isArray(obj) || Array.isArray(obj);

export const allowTernary = obj =>
  obj
    ? 'a'
    : 'b';

export default function server() {
  const app = new Koa();
  // logger
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    log('%s %s - %s', ctx.method, ctx.url, ms);
  });
  app.listen(3000);
}

export const someLoop = () => {
  for (let i = 0; i < 100; ++i) {
    log('>>>', i);
  }
};

export const callbackParams = () => {
  [].forEach(i => log('>>>', i));
  [].forEach((a, b) => log('>>>', a, b));
};
