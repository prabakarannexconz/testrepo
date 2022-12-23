const connect = require('../database/db')
const ObjectID = require('mongodb').ObjectId;

const Book = require('../models/books');
exports.index = async (req, res) => {
    // const db = await connect()
    // const books = await db.collection('books').find({}).toArray()
    const books = await Book.find()
    res.send({ books })
}

exports.store = async (req, res) => {

    // const db = await connect()

    //await db.collection('books').insertOne(req.body)

    try {
        await Book.create(req.body)
        res.status(201).send({ data: 'new book saved !' })
    } catch (error) {
        res.send(error.message)
    }
}

exports.showOne = async (req, res) => {
    const id = req.params.id
    // const db = await connect()
    // const book = await db.collection('books').findOne({ _id: ObjectID(id) })
    const book = await Book.findOne({ _id: ObjectID(id) })
    res.json(book)
}

exports.updateOne = async (req, res) => {
    const id = req.params.id
    // const db = await connect()
    // const book = await db.collection('books').updateOne({ _id: ObjectID(id) }, { $set: req.body })
    const book = await Book.updateOne({ _id: ObjectID(id) }, { $set: req.body })
    res.json({ data: 'book updated!' })
}

exports.deleteOne = async (req, res) => {
    const id = req.params.id
    // const db = await connect()
    // const book = await db.collection('books').deleteOne({ _id: ObjectID(id) })
    const book = await Book.deleteOne({ _id: ObjectID(id) })
    res.json({ data: 'book deleted!' })

}