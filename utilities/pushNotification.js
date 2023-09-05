// Function to send a push notification
const sendPushNotification = async (registrationToken, title, message) => {
  const notification = {
    title: title,
    body: message,
  };

  const options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day in seconds
  };

  try {
    const response = await firebaseAdmin.messaging().sendToDevice(registrationToken, { notification }, options);
    console.log('Successfully sent notification:', response);
    return { success: true, message: 'Notification sent successfully' };
  } catch (error) {
    console.error('Error sending notification:', error);
    return { success: false, message: 'Notification sending failed' };
  }
};

module.exports = { sendPushNotification };
