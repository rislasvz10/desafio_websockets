const express = require('express')
const router = express.Router()

const Manager = require('../controller/manager.js')
const manager = new Manager()

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    manager.newProduct(req.body)
    res.redirect('/')
})

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.render('get-products', {
        products: result
    })
})



module.exports = router