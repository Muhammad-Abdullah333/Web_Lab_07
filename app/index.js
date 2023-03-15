require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
const userRoutes = require('./Routes/userRoutes');
const adminRoutes  = require('./Routes/adminRoutes');

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Hello Meow Meow!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
