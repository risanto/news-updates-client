let env

process.env.NODE_ENV 
? env = process.env.NODE_ENV : env = 'development'

if (env === 'development') require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/news', require('./routes/news'))

app.listen(PORT, () => {
    console.log('Listening to port', PORT)
})