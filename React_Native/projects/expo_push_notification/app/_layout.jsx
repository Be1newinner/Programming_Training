import { useEffect, useState } from "react";
import { registerForPushNotificationsAsync } from "@/utils/PushNotificationService";
import { configureNotificationHandler } from "@/utils/NotificationHandler";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// First Install this
// npx expo install expo-notifications expo-device expo-constants

export default function _layout() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    configureNotificationHandler();

    registerForPushNotificationsAsync()
      .then((token) => {
        setExpoPushToken(token);
      })
      .catch((error) => setExpoPushToken(`${error}`));
  }, []);

  return (
    <SafeAreaView>
      <Text>Your Expo push token: {expoPushToken} </Text>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          if (expoPushToken) {
            await sendPushNotification(expoPushToken);
          }
        }}
      />
      <Stack />
    </SafeAreaView>
  );
}
