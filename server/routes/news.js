const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/top', async(req, res) => {

    const url = `https://newsapi.org/v2/top-headlines?country=${
        req.query.country 
        ? req.query.country : 'us'
    }&apiKey=${process.env.NEWS_API_KEY}`

    console.log(url)

    const response = await axios.get(url)

    console.log(response)

    res.send(response.data)
})

module.exports = router