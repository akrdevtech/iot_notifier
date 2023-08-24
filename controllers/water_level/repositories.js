const userRepository = (app) => {
    const { utilities: { errors: { codes, types: { MicroserviceError } } }, configs: { database: { collections } } } = app;
    const getUserByEmail = async (email) => {
        const usersRef = await db.collection(collections.USERS).doc(email);
        const doc = await usersRef.get();
        if (!doc.exists) {
            return Promise.reject(new MicroserviceError(codes.user.USER_DOES_NOT_EXIST))
        } else {
            return Promise.resolve(doc.data());
        }
    }

    return {
        getUserByEmail
    }
}

module.exports = userRepository;