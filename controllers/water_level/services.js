const waterLevelRepository = require('./repositories');
const getUserService = require('../users/services');

/* GET home page. */
const waterLevelService = (app) => {
  const waterLevelRepo = waterLevelRepository(app);
  const userService = getUserService(app);

  const findWaterLevel = async (userId) => {
    const userData = await userService.getUser(userId);
    const data = await waterLevelRepo.getWaterLevel(userId);
    if (!userData || !data) {
      return null;
    }
    const waterMaxPercent = ((userData.tankMax - data.waterLevel) / userData.tankMax) * 100;
    // return { ...data, waterLevelHeight: data.waterLevel, waterLevel: waterMaxPercent };
    const response = data;
    response.waterLevelHeight = data.waterLevel;
    response.waterLevel = waterMaxPercent;
    return response;
  };

  const upsertWaterLevel = async (userId, data) => {
    const { waterLevel, batteryLevel } = data;
    const currentValues = await findWaterLevel(userId);
    const userData = await userService.getUser(userId);
    if (!userData) {
      throw new Error("User Not Found")
    }

    if (!currentValues) {
      return waterLevelRepo.upsertWaterLevel(userId, data)
    }
    data.waterLevelWarning = false;
    data.batteryLevelWarning = false;
    data.waterOverflowWarning = false;

    const { tankHeight, tankMax } = userData;
    const waterMinPercent = ((tankHeight - waterLevel) / tankHeight) * 100;
    const waterMaxPercent = ((tankMax - waterLevel) / tankMax) * 100;

    console.log({ waterLevel, tankHeight, tankMax, waterMinPercent, waterMaxPercent });

    try {
      if (Number(waterMinPercent) < 25) {
        data.waterLevelWarning = true;
        if (!currentValues.waterLevelWarning && userData?.notificationKey) {
          console.log("water level warning")
          app.utilities.notifications
            .sendPushNotification(notificationKey, "Critical Water Level", "Water level has dropped below 25%, please switch on the pump")
        }
      }
      if (Number(waterMaxPercent) > 95) {
        data.waterOverflowWarning = true;
        if (!currentValues.waterOverflowWarning && userData?.notificationKey) {
          console.log("water level warning")
          app.utilities.notifications
            .sendPushNotification(notificationKey, "Critical Water Level", "Water level has exceeded 95%, please switch off the pump")
        }
      }
      if (Number(batteryLevel) < 25) {
        data.batteryLevelWarning = true;
        if (!currentValues.batteryLevelWarning) {
          console.log("battery level warning")
          app.utilities.notifications
            .sendPushNotification(notificationKey, "Critical Battery Level", "Battery level has dropped below 25%, please recharge")
        }
      }
    } catch (error) {
      console.log(error)
    }
    return waterLevelRepo.upsertWaterLevel(userId, data)
  };

  return {
    findWaterLevel,
    upsertWaterLevel
  }
}


module.exports = waterLevelService;