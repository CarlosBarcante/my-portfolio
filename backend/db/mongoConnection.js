const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECTION, () => {
    console.log('Conectado ao MongoDB');
})