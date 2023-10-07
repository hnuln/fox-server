const app = require('./app')
const config = require('./app/config')
const cors = require('koa-cors')


app.use(cors());

app.listen(config.APP_PORT, () => {
    console.log(`服务器启动成功，http://localhost:${config.APP_PORT}`);
})

const Routers = require('./routers')
app.use(Routers.routes()).use(Routers.allowedMethods())

