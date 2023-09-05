const responseHandlerUtil = require('./responseHandler');
const erroreHandlerUtil = require('./errorHandler');
const errorUtil = require('./errors');
const dateUtils = require('./dateUtils');
const encryptionUtils = require('./encryption');
const eventLogHandler = require('./eventLogHandler');
const requestHandler = require('./requestHandler');
const cacheUtils = require('./cacheUtils');
const dbUtils = require('./db');
const pushNotifications = require('./pushNotification');

module.exports = {
  eventLogHandler: eventLogHandler(),
  globalReponseHandler: responseHandlerUtil(),
  globalRequestInterceptor: requestHandler(),
  globalErrorHandler: erroreHandlerUtil(),
  errors: errorUtil,
  date: dateUtils,
  encryption: encryptionUtils,
  cache: cacheUtils,
  db: dbUtils,
  notifications: pushNotifications,
}
