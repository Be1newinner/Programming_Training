import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

export default function App() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);

    // Save the recording to the downloads folder
    try {
      const downloadDir = FileSystem.documentDirectory + "Download/";
      const fileName = `recording-${Date.now()}.m4a`;
      const downloadPath = downloadDir + fileName;

      // Ensure the directory exists
      await FileSystem.makeDirectoryAsync(downloadDir, { intermediates: true });

      // Move the file to the downloads folder
      await FileSystem.moveAsync({
        from: uri,
        to: downloadPath,
      });

      console.log("Recording saved to:", downloadPath);
    } catch (err) {
      console.error("Failed to save the recording", err);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
