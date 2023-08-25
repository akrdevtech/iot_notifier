const waterLevelRepository = require('./repositories');

/* GET home page. */
const waterLevelService = (app) => {
  const waterLevelRepo = waterLevelRepository(app);

  const findWaterLevel = async (userId) => {
    return waterLevelRepo.getWaterLevel(userId)
  };

  const upsertWaterLevel = async (userId, data) => {
    const { waterLevel, batteryLevel } = data;
    const currentValues = await findWaterLevel(userId);
    if (!currentValues) {
      return waterLevelRepo.upsertWaterLevel(userId, data)
    }
    data.waterLevelWarning = false;
    data.batteryLevelWarning = false;

    if (Number(waterLevel) < 25) {
      data.waterLevelWarning = true;
      if (!currentValues.waterLevelWarning) {
        console.log("water level warning")
        // notify(WATER_LEVEL_WARNING)
      }
    }
    if (Number(batteryLevel) < 25) {
      data.batteryLevelWarning = true;
      if (!currentValues.batteryLevelWarning) {
        console.log("battery level warning")
        // notify(BATTERY_LEVEL_WARNING)
      }
    }
    return waterLevelRepo.upsertWaterLevel(userId, data)
  };

  return {
    findWaterLevel,
    upsertWaterLevel
  }
}


module.exports = waterLevelService;