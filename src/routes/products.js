const express = require('express')
const router = express.Router()

const Manager = require('../controller/productmanager.js')
const manager = new Manager()

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.render('get-products', {
        products: result
    })
})

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    manager.newProduct(req.body)
    res.redirect('/')
})



module.exports = router