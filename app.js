const Koa = require('koa')
const app = new Koa()

const router = require('./router')

app.use(router.routes(), router.allowedMethods())
const port = 8081
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})


