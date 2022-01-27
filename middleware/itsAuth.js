const { error } = require('../helpers/constants')
const isAuth =(req, res, next)=>{
   const bearerHeader = req.headers['authorization']
   if(bearerHeader) {
       req.token = bearerHeader.split('')[1]
       next()
    }
    else{
    res.status(error.unauthorized.code).json(error.unauthorized.error)
    }
}

module.exports = isAuth