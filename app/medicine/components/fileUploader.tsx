import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const FileUploader = ({
  onFileSelected,
}: {
  onFileSelected: (uri: string) => void;
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const pickDocument = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedFile(result.assets[0].uri);
      onFileSelected(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedFile ? (
        <Image source={{ uri: selectedFile }} style={styles.imagePreview} />
      ) : (
        <Text style={styles.placeholderText}>No File Selected</Text>
      )}
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Text style={styles.uploadText}>
          {selectedFile ? "Change File" : "Upload Prescription"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 20 },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
  },
  placeholderText: { fontSize: 16, color: "gray", marginBottom: 10 },
  uploadButton: {
    backgroundColor: "indigo",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  uploadText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default FileUploader;
