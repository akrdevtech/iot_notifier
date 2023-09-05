const userRepository = require('./repositories');

/* GET home page. */
const userService = (app) => {
  const userRepo = userRepository(app);

  const getUser = async (userId) => {
    return userRepo.getUser(userId)
  };

  const upsertUser = async (userId, data) => {
    return userRepo.upsertUser(userId, data)
  };

  return {
    getUser,
    upsertUser
  }
}


module.exports = userService;