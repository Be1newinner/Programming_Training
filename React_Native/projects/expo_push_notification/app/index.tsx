import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { registerForPushNotificationsAsync } from "../utils/PushNotificationService";
import { configureNotificationHandler } from "../utils/NotificationHandler";
import { sendPushNotification } from "@/utils/NotificationUtils";

export default function App() {
  const [expoPushToken, setExpoPushToken] = React.useState<string | undefined>(
    ""
  );

  useEffect(() => {
    configureNotificationHandler();

    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token))
      .catch((error) => setExpoPushToken(`${error}`));
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text>Your Expo push token: {expoPushToken}</Text>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          if (expoPushToken) {
            await sendPushNotification(expoPushToken);
          }
        }}
      />
    </View>
  );
}
