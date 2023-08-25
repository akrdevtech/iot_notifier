const mongoose = require('mongoose');

const { Schema } = mongoose;

const WaterLevelSchema = new Schema(
  {
    userId: { type: String, required: true },
    waterLevel: { type: String, required: true },
    batteryLevel: { type: String, required: true },
    batteryLevelWarning: { type: Boolean, required: false, default: false },
    waterLevelWarning: { type: Boolean, required: false, default: false }
  },
  {
    collection: 'WaterLevel',
    timestamps: true,
    shardKey: { _id: 'hashed' },
    id: true,
    versionKey: 'version',
  },
);

module.exports = mongoose.model('WaterLevel', WaterLevelSchema);
