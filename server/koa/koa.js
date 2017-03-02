import http from 'http';
import path from 'path';
import { createReadStream } from 'fs';
import Koa from 'koa';
import compress from 'koa-compress';
import conditional from 'koa-conditional-get';
import etag from 'koa-etag';
import serve from 'koa-static';


/**
 * Koa
 * https://github.com/koajs/koa
 */
const app = new Koa();


/**
 * X-response-time
 */
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set(`X-Response-Time`, `${ms}ms`);
});


/**
 * Server logger
 */
app.use(async (ctx, next) => {
    await next();
    console.log(`[${ctx.method}] [${ctx.response.status}] ${ctx.url}`);
});


/**
 * Compress
 * https://github.com/koajs/compress
 */
app.use(compress());


/**
 * Etag & conditional get
 * https://github.com/koajs/conditional-get
 * https://github.com/koajs/etag
 */
app.use(conditional());
app.use(etag());


/**
 * Static stream server
 * https://github.com/koajs/static
 */
const build = path.resolve(`${__dirname}/../../build`);
app.use(serve(build, {index: false}));


/**
 * Modrewrite
 */
app.use(async (ctx) => {
    ctx.set(`Content-Type`, `text/html; charset=utf-8`);
    ctx.set(`Cache-Control`, `max-age=0`);
    const indexPath = path.resolve(`${__dirname}/../../build/index.html`);
    const readStream = createReadStream(indexPath);
    ctx.body = readStream;
    ctx.status = 200;
});


/**
 * Error
 */
app.on(`error`, (err) => {
    console.log(`ERROR! %s`, new Error(err));
});


export default app;