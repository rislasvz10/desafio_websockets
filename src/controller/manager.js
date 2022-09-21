let products = require('../model/products.js')

class Manager {

    newProduct = (product) => {
        let id
        if (products.length === 0) id = 1
        else products[products.length-1].id+1
        product.price = parseInt(product.price)
        product = {
            id,
            ...product
        }
        products.push(product)
        return product
    }

    findAll = () => {
        return products
    }

   
}

module.exports = Manager