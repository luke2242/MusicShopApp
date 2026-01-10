require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;
const musicRoute = require('./routes/MusicData');

app.use(cors());
app.use('/api', musicRoute);

app.get('/', (req, res) => {
    res.send('Hello, welcome to the backend!')
})

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server is running on port: " + PORT);
    } else {
        console.log("Error has occured: " + err.message);
    }
})