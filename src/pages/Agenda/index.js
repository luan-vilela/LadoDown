import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';
import * as Notifications from 'expo-notifications';

export default function App() {
  const [eventTitle, setEventTitle] = useState('');
  const [calendarColor, setCalendarColor] = useState('blue');
  const [notificationTime, setNotificationTime] = useState('');

  const createCalendarAndScheduleNotification = async () => {
    const calendarID = await createCalendar();
    scheduleNotification(calendarID);
  };

  const createCalendar = async () => {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };

    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: calendarColor,
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    console.log(`Your new calendar ID is: ${newCalendarID}`);
    return newCalendarID;
  };

  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  };

  const scheduleNotification = async (calendarID) => {
    const notificationSeconds = parseInt(notificationTime, 10);
    if (!isNaN(notificationSeconds)) {
      const triggerTime = new Date(Date.now() + notificationSeconds * 1000);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Lembrete',
          body: `Giovanni tem que tomar: ${eventTitle}`,
        },
        trigger: {
          date: triggerTime,
        },
      });

      console.log('Notification scheduled:', triggerTime);
    } else {
      console.log('Invalid notification time:', notificationTime);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Calendar Module Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={eventTitle}
        onChangeText={setEventTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Calendar Color (e.g., blue)"
        value={calendarColor}
        onChangeText={setCalendarColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Notification Time (seconds)"
        value={notificationTime}
        onChangeText={setNotificationTime}
        keyboardType="numeric"
      />
      <Button title="Create Calendar and Schedule Notification" onPress={createCalendarAndScheduleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
