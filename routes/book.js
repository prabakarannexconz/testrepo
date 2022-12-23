const express = require('express')
const bookRouter = express.Router()

const booksController = require('../controllers/booksController')



bookRouter.get('/', booksController.index)

bookRouter.post('/', booksController.store)

bookRouter.get('/:id', booksController.showOne)

bookRouter.patch('/:id', booksController.updateOne)

bookRouter.delete('/:id', booksController.deleteOne)


module.exports = bookRouter