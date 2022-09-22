const express = require("express");
const { Server } = require("socket.io");
const handlebars = require("express-handlebars");
const productsRouter = require("./routes/products");

let products = require('./model/products');
const Manager = require("./controller/productmanager");
const manager = new Manager()
const app = express();
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

const io = new Server(server);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/content', express.static('./public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('create-product')
})

app.use('/products', productsRouter)


io.on('connection', socket => {
  console.log(`Client ${socket.id} connected...`)
    socket.emit('history', products)
    socket.on('products',data => {
      io.emit('history',data)
    })

  })
