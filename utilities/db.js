const mongoose = require("mongoose");

exports.connect = () => {
    let connectionUrl = `mongodb://127.0.0.1:27017/iot_notifier`;
    mongoose.connect(connectionUrl);
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error(`MongoDB connection error: ${error}`);
    });
    db.once('open', () => {
        console.info(`DB connection established on 127.0.0.1:27017 , DB Name: iot_notifier`);
    });
};