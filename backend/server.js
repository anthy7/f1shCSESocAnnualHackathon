const express = require('express')
var bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

var data = []


/**
 * Middleware
 */
app.set('port', port)
app.use(bodyParser.json())

/**
 * Paths
 */
app.get('/', (req, res) => {
  res.send('Ping pong!')
})

/**
 * Listen
 */
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`listening on ${port}...`)
})
