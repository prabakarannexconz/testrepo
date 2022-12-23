const express = require('express')
const router = express.Router()


const bookRouter = require('./book')
const authRouter = require('./auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/', (req, res) => {
    res.json({ data: 'Hello World! from post' })
})

router.use('/book', bookRouter)
router.use('/auth', authRouter)

router.all('*', (req, res) => {
    res.send('page not found')
})


module.exports = router