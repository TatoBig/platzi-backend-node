const store = require('./store')

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[message controller] No hay usuario o mensaje')
      return reject('Los datos son incorrectos')
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    }

    store.add(fullMessage)

    return resolve(fullMessage)
  })
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(id)
    console.log(message)
    if (!id || !message) {
      reject('Invalid data')
      return false
    }

    const result = await store.updateText(id, message)

    resolve(result)
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage
}