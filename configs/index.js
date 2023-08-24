const firebaseConfigs = require('./firebaseConfigs');
const databaseConfigs = require('./databaseConfigs');
const errorConfigs = require('./errorConfigs');
const commonConfigs = require('./common');
const encryptionConfigs = require('./encryptionConfigs');

module.exports = {
    firebase: firebaseConfigs,
    database: databaseConfigs,
    errors: errorConfigs,
    common: commonConfigs,
    encryption: encryptionConfigs
}