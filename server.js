const express = require('express')
const db = require('./db')
const cors = require('cors')
const PORT = process.env.PORT || 3003
const productController = require('./controller/productController')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send("welcome to my page")
})
app.get('/products', productController.getAllProducts)
app.get('/products/:id', productController.getProductById)
app.get(`products/:id/:name`, productController.getProductByName)
app.get('/api/products', productController.getProductByCriteria)
app.post('/products', productController.createProduct)
app.put('/products/:id', productController.updateProduct)
app.delete('/products/:id', productController.deleteProduct)






app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
