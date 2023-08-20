const Koa = require("koa")

const app = new Koa()

// 使用koa-body中间件
const {koaBody} = require('koa-body')
// 处理请求体数据
app.use(
    koaBody({
        multipart: true,
        parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'],
    })
);

app.use(async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        console.log(error);
        ctx.body = {
            code: '500',
            msg: '服务器未知错误'
        }
    }
})
module.exports = app