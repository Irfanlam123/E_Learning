import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  ToastAndroid,
  Platform,
} from "react-native";
import axios from "axios";

export default function CourseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    try {
      const courseData = {
        name,
        description,
        price: parseFloat(price),
        image,
      };

      const response = await axios.post("http://localhost:8080/course", courseData);
      if (response.status === 201) {
        // Reset form fields
        setName("");
        setDescription("");
        setPrice("");
        setImage("");

        // Dismiss keyboard
        Keyboard.dismiss();

        // Show toast (Android only)
        if (Platform.OS === "android") {
          ToastAndroid.show("Course added successfully!", ToastAndroid.SHORT);
        } else {
          alert("Course added successfully!");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding course!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
});
