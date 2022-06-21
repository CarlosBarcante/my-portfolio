const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECTION, (err) => {
    if (err) console.log(err.message);
    else console.log('Conectado ao MongoDB');
})