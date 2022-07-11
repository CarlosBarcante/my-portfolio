const express = require('express');
require('dotenv').config();
const routes = require('./backend/routes');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    // Express vai entregar os assets de produção
    app.use(express.static('frontend/build'));

    // Express vai entregar o index.html se não reconhecer a rota
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log('App running...');
})