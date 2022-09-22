let products = require('../model/products.js')

class ProductManager {

    findAll = () => {
        return products
    }

    newProduct = (product) => {
        let id
        if (products.length === 0) id = 1
        else id = products[products.length-1].id+1
        product.price = parseInt(product.price)
        product = {
            id,
            ...product
        }
        products.push(product)
        return product
    }


   
}

module.exports = ProductManager