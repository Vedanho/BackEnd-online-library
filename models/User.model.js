const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    name: String,
    isBlocked: {
        type: Boolean,
        default: false
    },
    rentBooks: [{
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User

