const MongoClient = require('mongodb');

const state = {
    db: null,
};

exports.connect = (url, done) => {
    MongoClient.connect(url, (error, db) => {
        if (error) {
            done(error);
        } else {
            state.db = db;
            done();
        }
    });
};

exports.get = () => state.db;