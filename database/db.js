// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url, { useUnifiedTopology: true });

// const dbName = 'Node_Book';

// async function connect() {
//     await client.connect();
//     const db = client.db(dbName)
//     return db

// }
// module.exports = connect; 

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/Node_Book')
}

module.exports = connectDB
