const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.DB_STRING)

        conn.then((res) => {
            console.log(`Connected ${res.connection.host}`.cyan.underline);
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB