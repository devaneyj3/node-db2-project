const express = require('express');

const carRoutes = require('./api/carRoutes');
const server = express(); 

server.use(express.json());

server.use('/api/car', carRoutes);

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})