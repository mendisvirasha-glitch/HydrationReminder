import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState('Time to drink a glass of water!');
  const [interval, setInterval] = useState(1);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water. Please enable notifications in your device settings.',
        );
      }
    }

    requestPermissions();
  }, []);

  async function scheduleReminder() {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Enable notifications to schedule reminders.');
      return;
    }

    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: '💧 Hydration Reminder',
        body: message,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: interval * 60,
        repeats: true,
      },
    });
    setIsReminding(true);
    Alert.alert('Set!', `Reminding you every ${interval} minutes.`);
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert('Stopped!', 'Reminders cancelled.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>
const [message, setMessage] = useState('Time to drink a glass of water!');

<Text style={styles.label}>Reminder message</Text>
<TextInput
  style={styles.input}
  value={message}
  onChangeText={setMessage}
  placeholder="Enter a reminder message"
/>

      <Text style={styles.label}>Reminder message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter a reminder message"
      />
      <Text style={styles.label}>Set interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={interval.toString()}
        onChangeText={(text) => setInterval(Math.max(1, parseInt(text, 10) || 1))}
        keyboardType="numeric"
      />
      <Text style={styles.status}>
        Status: {isReminding ? 'Active 🟢' : 'Inactive 🔴'}
      </Text>
      <Button title="Start Reminder" onPress={scheduleReminder} disabled={isReminding} />
      <View style={{ height: 10 }} />
      <Button title="Stop Reminder" onPress={stopReminder} disabled={!isReminding} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  emoji: {
    fontSize: 64,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderColor: '#999',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
  status: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
});
