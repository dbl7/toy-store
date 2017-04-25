const db = require('../db');

exports.all = ({ category, categoryType }, done) => {
    const toys = db.get().collection('toys');
    
    toys.find({ category, categoryType }).toArray(done);
};

exports.popular = (done) => {
    const toys = db.get().collection('toys');

    toys.find({ orders: 500 }).limit(6).toArray(done);
};