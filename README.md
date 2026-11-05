# Hydration Reminder

A React Native app built with Expo for setting recurring reminders to drink water. Users can choose a reminder message and interval, start or stop reminders, and view hydration tips and app information.

## Features

- Schedule a repeating local notification at a chosen interval.
- Customize the text shown in reminder notifications.
- Start and stop reminders from the Reminder screen.
- Read static hydration information on the Tips screen.
- View project details on the About screen.

The app requests notification permission before scheduling reminders. Notifications are delivered by the device and may depend on its operating-system settings.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Use the Expo CLI prompts to open the app on a device or emulator. Notification behavior should be tested on a device or development environment that supports Expo Notifications.

## Project Structure

```text
src/app/
  _layout.tsx   Expo Router tab navigation and notification handler
  index.tsx     Reminder controls and notification scheduling
  tips.tsx      Static hydration tips
  about.tsx     App information and developer credit
```

## Technology

- Expo SDK 57
- React Native
- TypeScript
- Expo Router
- Expo Notifications

Replace the developer name placeholder in `src/app/about.tsx` with your name before submitting the project.
