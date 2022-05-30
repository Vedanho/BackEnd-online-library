const { default: mongoose } = require("mongoose");


const reviewSchema = mongoose.Schema({
    text: String,
    book: {
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review