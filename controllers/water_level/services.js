const getUserRepo = require('./repositories');

/* GET home page. */
const userService = (app) => {
    const userRepo = getUserRepo(app);

    const getUserById = async (id) => {
        return userRepo.getUserByEmail(id);
    }

    return {
        getUserById
    }
}


module.exports = userService;