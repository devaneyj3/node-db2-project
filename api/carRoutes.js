const express = require('express');

const routes = express.Router();

const db = require('../data/dbHelper');

routes.get('/', async (req, res) => {
    const cars = await db.getAll('cars');
    res.status(200).send(cars)
})

routes.post('/', async(req, res) => {
    await db.insert('cars', req.body)
    res.status(201).send(req.body)
})

// routes.delete('/', (req, res) => {
//     res.status(204).send(stuff)
// })

// routes.put('/', (req, res) => {
//     res.status(200).send(stuff)
// })

module.exports = routes;