"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const router = express.Router();
const axios = require('axios');
router.get('/top', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://newsapi.org/v2/top-headlines?country=${req.query.country
        ? req.query.country : 'us'}&apiKey=${process.env.NEWS_API_KEY}`;
    const response = yield axios.get(url);
    res.send(response.data);
}));
module.exports = router;
//# sourceMappingURL=news.js.map