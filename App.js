const express = require('express');
const { productRoute } = require('./route/productRoute');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const port = 7888;

app.use(productRoute);

app.listen(port, () => console.log(`app listening to port${port}`));
