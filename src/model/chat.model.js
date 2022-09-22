const Manager = require('../controller/chat.manager')
const manager = new Manager()

let chat = manager.findAll()

module.exports = chat