const db = require('../db');

exports.all = done => {
    const toys = db.get().collection('toys');
    toys.find().toArray(done);
}