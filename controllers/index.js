const express = require('express');
const routes = express.Router();
const getWaterLevelController = require('./water_level');
const getUsersController = require('./users');

const controllers = (app) => {
    const waterLevelRoutes = getWaterLevelController(app).private;
    const userRoutes = getUsersController(app).private;
    routes.use('/water-level', waterLevelRoutes);
    routes.use('/users', userRoutes);

    return routes;
}


module.exports = controllers;