const db = require('../db');

exports.all = ({ category, categoryType }, done) => {
    const toys = db.get().collection('toys');
    toys.find({ category, categoryType }).toArray(done);
}