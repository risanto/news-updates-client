if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

import express = require('express')
import { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req: Request, res: Response) => {
    res.send('HOME')
})

app.use('/news', require('./routes/news'))

export default app