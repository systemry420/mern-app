const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express()

app.use('/api/goals', require('./routes/goalsRoutes'))

app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})