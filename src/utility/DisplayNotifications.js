import notifee, {AndroidImportance} from '@notifee/react-native';

async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'default8',
    name: 'Default Channel8',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: 'JobHunt',
    body: 'Your jobfeed has been updated! New roles have been added since your last visit. Check them out and apply for the best opportunities!',
    android: {
      channelId,
      smallIcon: 'ic_launcher_foreground',
      color: '#DAE0E2',
      largeIcon: 'ic_launcher_foreground',
      showTimestamp: true,
      style: {
        type: 'BIGTEXT',
        text: 'Your jobfeed has been updated! New roles have been added since your last visit. Check them out and apply for the best opportunities!',
      },
      pressAction: {
        id: 'default',
      },
    },
  });
}

export default onDisplayNotification;
