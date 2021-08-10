const express = require('express')
const bodyParser = require('body-parser')

// const router = require('./components/message/network')
const router = require('./network/routes')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(router)

router(app)

app.use('/app', express.static('public'))

// app.use('/', (req, res) => {
//   res.send('Holass')
// })

app.listen(5000)

console.log('La aplicación está escuchando en el puerto http://localhost:5000')