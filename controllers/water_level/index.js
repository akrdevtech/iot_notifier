const express = require('express');
const { checkSchema } = require('express-validator');
const routes = express.Router();
const getWaterLevelServices = require('./services');

const controllers = (app) => {
    const waterLevelServices = getWaterLevelServices(app);

    const findWaterLevel = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await waterLevelServices.findWaterLevel(id);
            return req.sendResponse(response, res, next);
        } catch (error) {
            next(error)
        }
    }

    const upsertWaterLevel = async (req, res, next) => {
        try {
            const { id } = req.params;
            const {
                waterLevel,
                batteryLevel,
            } = req.body;
            const response = await waterLevelServices.upsertWaterLevel(id, {
                waterLevel,
                batteryLevel,
            });
            return req.sendResponse(response, res, next);
        } catch (error) {
            next(error)
        }
    }

    routes.get('/:id', findWaterLevel);
    routes.post('/:id', upsertWaterLevel);

    return { public: routes, private: routes };
}


module.exports = controllers;