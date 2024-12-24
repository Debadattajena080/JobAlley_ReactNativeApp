import notifee, {AndroidImportance} from '@notifee/react-native';
async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'default8',
    name: 'Default Channel8',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Main body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher_foreground',
      color: '#DAE0E2',
      largeIcon: 'ic_launcher_foreground',
      // showChronometer: true,
      showTimestamp: true,
      pressAction: {
        id: 'default',
      },
    },
  });
}

export default onDisplayNotification;
