const Router = require('koa-router');

const interface = require('./interface')

const Routers = new Router();

Routers.use(interface.routes())

module.exports = Routers;
 

