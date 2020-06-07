import express = require('express')
import { Request, Response } from 'express'

const router = express.Router()
const axios = require('axios')

router.get('/top', async(req: Request, res: Response) => {

    const url = `https://newsapi.org/v2/top-headlines?country=${
        req.query.country 
        ? req.query.country : 'us'
    }&apiKey=${process.env.NEWS_API_KEY}`

    const response = await axios.get(url)

    res.send(response.data)
})

export = router