const express = require('express');
const routes = express.Router();
const getWaterLevelController = require('./water_level');

const controllers = (app) => {
    const waterLevelRoutes = getWaterLevelController(app).private;

    routes.use('/water-level', waterLevelRoutes);

    return routes;
}


module.exports = controllers;