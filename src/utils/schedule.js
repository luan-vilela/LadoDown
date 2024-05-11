import * as Notifications from 'expo-notifications';

export const schedulePushNotification = async config => {
  const schedule = await Notifications.scheduleNotificationAsync({
    content: {
      title: config.title,
      body: config.body,
      data: config.data,
    },
    trigger: config.trigger,
  });

  return schedule;
};
