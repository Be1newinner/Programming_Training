import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button } from "react-native";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../utils/PushNotificationService";
import { configureNotificationHandler } from "../utils/NotificationHandler";

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);

  // Refs to store subscriptions
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    configureNotificationHandler();

    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token))
      .catch((error) => setExpoPushToken(`${error}`));

    // Listen for incoming notifications
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // Listen for user's interaction with the notification
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    // Cleanup listeners on unmount
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text>Your Expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title:{" "}
          {notification
            ? notification.request.content.title
            : "No notification received"}
        </Text>
        <Text>
          Body:{" "}
          {notification
            ? notification.request.content.body
            : "No notification received"}
        </Text>
        <Text>
          Data:{" "}
          {notification
            ? JSON.stringify(notification.request.content.data)
            : "No data received"}
        </Text>
      </View>
    </View>
  );
}
