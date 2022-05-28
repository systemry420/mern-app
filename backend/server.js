const express = require('express');
const errorHandler = require('./middlewares/errorMiddleware');
const colors = require('colors')
const { json, urlencoded } = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

connectDB()

const app = express()

app.use(json())

app.use(urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})