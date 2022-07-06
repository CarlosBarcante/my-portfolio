const express = require('express');
require('dotenv').config();
const routes = require('./backend/routes');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({
        success: true
    });
})

app.listen(PORT, () => {
    console.log('App running...');
})