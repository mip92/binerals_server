const Router = require('express')
const router = new Router()

const loginRouter=require('./login.router')
router.use('/login',loginRouter)

module.exports=router