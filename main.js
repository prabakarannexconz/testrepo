var express = require('express')
var bodyParser = require('body-parser')
const connectDB = require('./database/db')
var app = express()

// parse application/x-www-form-urlencoded


// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT || 3000



const routes = require('./routes/index')

app.use(routes)


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })

})
