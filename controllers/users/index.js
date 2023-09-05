const express = require('express');
const routes = express.Router();
const getUserServices = require('./services');

const controllers = (app) => {
    const userServices = getUserServices(app);

    const getUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const response = await userServices.getUser(id);
            return req.sendResponse(response, res, next);
        } catch (error) {
            next(error)
        }
    }

    const upsertUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const {
                firstName,
                lastName,
                notificationKey,
                tankHeight,
                tankMax,
            } = req.body;
            const response = await userServices.upsertUser(id, {
                firstName,
                lastName,
                notificationKey,
                tankHeight,
                tankMax,
            });
            return req.sendResponse(response, res, next);
        } catch (error) {
            next(error)
        }
    }

    routes.get('/:id', getUser);
    routes.post('/:id', upsertUser);

    return { public: routes, private: routes };
}


module.exports = controllers;