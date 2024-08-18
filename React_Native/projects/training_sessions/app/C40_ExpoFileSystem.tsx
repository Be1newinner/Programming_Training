import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default function FileSystemDemo() {
  const [fileContent, setFileContent] = useState("");
  const [fileName, setFileName] = useState("example.txt");
  const [statusMessage, setStatusMessage] = useState("");
  const [directoryContent, setDirectoryContent] = useState([]);

  const writeFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + fileName;

      // Write the file to the document directory
      await FileSystem.writeAsStringAsync(fileUri, fileContent);

      // Check platform
      if (Platform.OS === "android") {
        // Request media library permissions
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== "granted") {
          setStatusMessage("Permission to access media library is required.");
          return;
        }

        // Create an asset for the file
        const asset = await MediaLibrary.createAssetAsync(fileUri);

        // Create a "Download" album or get the existing one
        const album = await MediaLibrary.getAlbumAsync("Download");
        if (album == null) {
          await MediaLibrary.createAlbumAsync("Download", asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }

        setStatusMessage(`File '${fileName}' written to Downloads folder!`);
      } else {
        setStatusMessage(`File '${fileName}' written successfully!`);
      }
    } catch (error) {
      setStatusMessage(`Error writing file: ${error.message}`);
    }
  };

  const readFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + fileName;
      const content = await FileSystem.readAsStringAsync(fileUri);
      setFileContent(content);
      setStatusMessage(`File '${fileName}' read successfully!`);
    } catch (error) {
      setStatusMessage(`Error reading file: ${error.message}`);
    }
  };

  const deleteFile = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + fileName;
      await FileSystem.deleteAsync(fileUri);
      setFileContent("");
      setStatusMessage(`File '${fileName}' deleted successfully!`);
    } catch (error) {
      setStatusMessage(`Error deleting file: ${error.message}`);
    }
  };

  const listFiles = async () => {
    try {
      const files = await FileSystem.readDirectoryAsync(
        FileSystem.documentDirectory
      );
      setDirectoryContent(files);
      setStatusMessage("Directory contents listed successfully!");
    } catch (error) {
      setStatusMessage(`Error listing directory: ${error.message}`);
    }
  };

  const createDirectory = async () => {
    try {
      const newDirUri = FileSystem.documentDirectory + "newDirectory/";
      await FileSystem.makeDirectoryAsync(newDirUri, { intermediates: true });
      setStatusMessage("Directory created successfully!");
      listFiles(); // Update the directory content view
    } catch (error) {
      setStatusMessage(`Error creating directory: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expo File System Demo</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter file name"
        value={fileName}
        onChangeText={setFileName}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Enter file content"
        value={fileContent}
        onChangeText={setFileContent}
        multiline={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="Write File" onPress={writeFile} />
        <Button title="Read File" onPress={readFile} />
        <Button title="Delete File" onPress={deleteFile} />
        <Button title="List Files" onPress={listFiles} />
        <Button title="Create Directory" onPress={createDirectory} />
      </View>

      <Text style={styles.status}>{statusMessage}</Text>

      <Text style={styles.subTitle}>Directory Contents:</Text>
      {directoryContent.map((file, index) => (
        <Text key={index} style={styles.fileItem}>
          {file}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  fileItem: {
    fontSize: 14,
    marginVertical: 2,
  },
});
