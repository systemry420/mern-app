const { json, urlencoded } = require('body-parser');
const express = require('express');
const errorHandler = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express()
app.use(json())
app.use(urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalsRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})