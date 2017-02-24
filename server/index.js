import koa from './koa/koa';

/**
 * Koa Server
 */
const port = process.env.PORT || 3000;
koa.listen(port);
console.log(`Koa server started at port: ${port}`);
