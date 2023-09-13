const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userId: { type: String, required: true },
    notificationKey: { type: String, required: false },
    firsName: { type: String, required: true },
    lastName: { type: String, required: false },
    maxAlertAt: { type: Number, required: false, default: 90 },
    minAlertAt: { type: Number, required: false, default: 25 },
    motorStatus:{ type: Boolean, required: false, default: false },
    tankHeight:{ type: Number, required: false, default: 0 },
    tankMax:{ type: Number, required: false, default: 0 },
  },
  {
    collection: 'Users',
    timestamps: true,
    shardKey: { _id: 'hashed' },
    id: true,
    versionKey: 'version',
  },
);

module.exports = mongoose.model('Users', UserSchema);
