const getUserById = {
    id: {
      in: ['params'],
      isString: { errorMessage: 'Must provide user id' },
      trim: true,
      notEmpty: { errorMessage: 'Must provide user id' },
      errorMessage: 'Invalid user id',
    }
  };
  
  
  module.exports = {
    getUserById
  }