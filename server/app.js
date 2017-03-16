const express = require('express');
const app = express();

const db = require('./db.js');

const toys = require('./controllers/toys');

app.use('/api/toys', toys);

db.connect('mongodb://127.0.0.1:27017/toy-store', error => {
    if (error) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    } else {
        app.listen(3001, () => {
            console.log('Toy Store is listening on port 3001');
        });
    }
});
