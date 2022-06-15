const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./backend/routes');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({
        success: true
    });
})

app.listen(PORT, () => {
    console.log('App running...');
})