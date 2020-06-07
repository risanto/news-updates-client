"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const express = require("express");
const app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('HOME');
});
app.use('/news', require('./routes/news'));
exports.default = app;
//# sourceMappingURL=app.js.map