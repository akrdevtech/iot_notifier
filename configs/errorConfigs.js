module.exports = {
    ErrorCodes: {
      auth: {
        UNAUTHORIZED: 'UNAUTHORIZED',
        SYSTEM_ERROR: 'SYSTEM_ERROR',
      },
      application: {
        RQST_PARAMS_MISSING: 'RQST_PARAMS_MISSING',
        PROFANITY_CHECK_FAILED: 'PROFANITY_CHECK_FAILED'
      },
      user:{
        USER_EXIST : 'USER_EXIST',
        USER_DOES_NOT_EXIST : 'USER_DOES_NOT_EXIST',
        USER_CREATION_FAILED: 'USER_CREATION_FAILED',
      },
      organizations:{
        ORGANIZATION_DOES_NOT_EXIST : 'ORGANIZATION_DOES_NOT_EXIST',
        ORGANIZATION_CREATION_FAILED: 'ORGANIZATION_CREATION_FAILED',
      },
      address:{
        ADDRESS_DOES_NOT_EXIST : 'ADDRESS_DOES_NOT_EXIST',
        ADDRESS_CREATION_FAILED: 'ADDRESS_CREATION_FAILED',
      },
      settings:{
        SETTINGS_NOT_FOUND: 'SETTINGS_NOT_FOUND',
      }
    },

    ErrorMessages: {
      UNAUTHORIZED: 'You are not authorized to access this url. Please pass the valid access code',
      SYSTEM_ERROR: 'Something bad happened. Please contact Admin',
      RQST_PARAMS_MISSING: 'Parameters are missing in the request',
      USER_CREATION_FAILED: 'Failed to create user',
      USER_EXIST : 'User already exists',
      USER_DOES_NOT_EXIST: 'User does not exist',
      SETTINGS_NOT_FOUND: 'Requested setting is not configured',
      ORGANIZATION_DOES_NOT_EXIST: "Organization doesnot exist",
      ORGANIZATION_CREATION_FAILED: "Failed to create organization",
      ADDRESS_DOES_NOT_EXIST: "Address doesnot exist",
      ADDRESS_CREATION_FAILED: "Failed to create address",
    },
  };
