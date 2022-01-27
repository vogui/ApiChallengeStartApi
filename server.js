const express = require('express')
const app = express();
const startWRouter = require('./routes/startWarRoutes')
const authRouter = require('./routes/authRoutes')
require('dotenv').config()
const env = process.env


app.use('/', authRouter)
app.use('/', startWRouter)
app.listen(env.PORT || 3000, function () {
    console.log("start on port " + env.PORT);
  });