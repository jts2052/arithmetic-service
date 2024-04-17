require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

if (!process.env.PORT) {
    console.log('PORT is not defined');
    process.exit(1);
}

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Arithmetic service - Hello World!'));

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
})

app.listen(port);