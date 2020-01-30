const mongoose = require('mongoose')
// creating schema 
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
})

// create note model 
const Note = mongoose.model('Note', noteSchema)

module.exports = Note
