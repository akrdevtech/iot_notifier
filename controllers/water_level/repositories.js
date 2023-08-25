const WaterLevel = require('./model');

const waterLevelRepository = (app) => {
    const { utilities: { errors: { codes, types: { MicroserviceError } } }, configs: { database: { collections } } } = app;

    const getWaterLevel = async (userId) => {
        try {
            const data = await WaterLevel.findOne({ userId });
            return data;
        } catch (err) {
            logger.error(`Error while finding ShippingService details in db: ${err}`);
            throw new MicroserviceError(ErrorCodes.SYSTEM_ERROR);
        }
    };

    const upsertWaterLevel = async (userId, data) => {
        try {
            const response = await WaterLevel.updateOne({ userId }, { $set: { ...data } }, { upsert: true });
            return response;
        } catch (err) {
            logger.error(`Error while upserting ShippingService details in db: ${err}`);
            throw new MicroserviceError(ErrorCodes.SYSTEM_ERROR);
        }
    };

    return {
        getWaterLevel,
        upsertWaterLevel
    }
}

module.exports = waterLevelRepository;