const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {

  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })




  // console.log(req.headers)
  // res.header({
  //   "custom-header": "Nuestro valor personalizado"
  // })
  // // res.send('Lista de mensajes')
  // response.success(req, res, 'Lista de mensajes')
})

router.post('/', (req, res) => {
  // console.log(req.query)
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch((e) => {
      console.log(e)
      response.error(req, res, 'Información inválida', 400, 'Error en el controlador')
    })
  // console.log(req.body)
  // res.status(201).send([{ error: '', body: 'Creado correctamente' }])
})

router.patch('/:id', function (req, res) {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e)
    })
})

module.exports = router