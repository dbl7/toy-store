const { ObjectId } = require('mongodb');

const db = require('../db');

exports.all = ({ category, categoryType }, done) => {
    const toys = db.get().collection('toys');
    
    toys.find({ category, categoryType }).toArray(done);
};

exports.popular = (done) => {
    const toys = db.get().collection('toys');

    toys.find({ orders: { $gt: 700 } }).limit(6).toArray(done);
};

exports.get = (id, done) => {
    const toys = db.get().collection('toys');
    toys.findOne({ _id: ObjectId(id) }).then(done);
};