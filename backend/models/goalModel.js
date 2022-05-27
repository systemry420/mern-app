const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please provide text']
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model('Goal', goalSchema)