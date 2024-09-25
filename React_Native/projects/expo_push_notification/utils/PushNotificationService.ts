// PushNotificationService.ts
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";
import { handleRegistrationError } from "./NotificationHandler";

async function configureAndroidChannel() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
}

async function requestNotificationPermissions(): Promise<string | undefined> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    handleRegistrationError(
      "Permission not granted to get push token for push notification!"
    );
    return;
  }

  return finalStatus;
}

  async function getExpoPushToken() {
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;

    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }

    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  }

export async function registerForPushNotificationsAsync(): Promise<
  string | undefined
> {
  await configureAndroidChannel();

  if (Device.isDevice) {
    await requestNotificationPermissions();
    return getExpoPushToken();
  } else {
    handleRegistrationError("Must use physical device for push notifications");
  }
}
