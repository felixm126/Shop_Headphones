const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: {type : String, required: true},
        brand: {type : String, required: true},
        price:{type : Number, required: true},
        color: {type : String, required: true},
        description: {type : String, required: true},
        rating: {type : Number, required: true},
        features: {type :String, required: true},
        image: {type : String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)