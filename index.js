const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://frontend-xenon.vercel.app", // Add any other origins you need
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you want to allow
    credentials: true
}));


mongoose.connect(process.env.DB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB:", err));



app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/properties'));

app.get("/", (req, res) => {
    res.send("Hello World")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
