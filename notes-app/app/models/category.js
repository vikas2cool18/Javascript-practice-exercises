const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema for a category - name  
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

// create a model called as Category 
const Category = mongoose.model('Category', categorySchema)

module.exports = Category