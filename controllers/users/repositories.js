const Users = require('./model');

const usersRepository = (app) => {
    const { utilities: { errors: { codes, types: { MicroserviceError } } }, configs: { database: { collections } } } = app;

    const getUser = async (userId) => {
        try {
            const data = await Users.findOne({ userId });
            return data;
        } catch (err) {
            logger.error(`Error while finding user details in db: ${err}`);
            throw new MicroserviceError(ErrorCodes.SYSTEM_ERROR);
        }
    };

    const upsertUser = async (userId, data) => {
        try {
            const response = await Users.updateOne({ userId }, { $set: { ...data } }, { upsert: true });
            return response;
        } catch (err) {
            logger.error(`Error while upserting user details in db: ${err}`);
            throw new MicroserviceError(ErrorCodes.SYSTEM_ERROR);
        }
    };

    return {
         getUser,
        upsertUser
    }
}

module.exports = usersRepository;