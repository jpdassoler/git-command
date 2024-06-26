require('dotenv').config();
const express = require('express');
const cool = require('cool-ascii-faces');
const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    console.log('Hello cloud');
})

app.get('/cool', (req, res) => {
    res.send(cool());
})

app.listen(port, () => {
    console.log(`start listening ${port}`);
})