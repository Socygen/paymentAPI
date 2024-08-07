const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const globalRoutes = require('./routes/globalRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/', globalRoutes);

mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Successfully Connected To DataBase ...'))
    .catch((error) => console.error('DataBase Connection Failed ...', error));

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`App Is Running On Port : ${PORT}`);
});
