const mongoose = require('mongoose');
const config = require('../config');

exports.connect = () => {
  const {
    mongo: {
      baseUrl, url, db: dbName, user, secret, params,
    },
  } = config;
  let connectionUrl = `${baseUrl}${user}:${secret}@${url}/${dbName}`;
  logger.info(`DB Params: ${params}`);
  if (params) connectionUrl += params;
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return null;
    }
    const db = client.db(dbName);
    logger.info(`DB connection established on ${url} as user: ${user}, DB Name: ${dbName}`);
    return db;
  })
};
