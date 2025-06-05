import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signupUser } from "./authSlice";
import { Picker } from "@react-native-picker/picker";

const Signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    role: "",
  });

  const handleChange = (key: string, val: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const handleClick = () => {
    const { name, email, password, mobile, address, role } = value;

    if (!name || !email || !password || !mobile || !address || !role) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    dispatch(signupUser(value))
      .unwrap()
      .then(() => {
        Alert.alert("Success", "User registered successfully!");
        router.push("/auth/login");
      })
      .catch((err) => {
        Alert.alert("Error", err);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.formContainer} keyboardShouldPersistTaps="handled">
          <TextInput
            placeholder="Enter Your Name"
            value={value.name}
            onChangeText={(text) => handleChange("name", text)}
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Enter Your Email"
            value={value.email}
            onChangeText={(text) => handleChange("email", text)}
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Enter Your Password"
            value={value.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Enter Your Mobile Number"
            value={value.mobile}
            onChangeText={(text) => handleChange("mobile", text)}
            keyboardType="phone-pad"
            style={styles.input}
            placeholderTextColor="#999"
          />
          <TextInput
            placeholder="Enter Your Address"
            value={value.address}
            onChangeText={(text) => handleChange("address", text)}
            style={styles.input}
            placeholderTextColor="#999"
          />

          <Picker
            selectedValue={value.role}
            onValueChange={(itemValue) => handleChange("role", itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>

          <Mybutton title={loading ? "Signing Up..." : "Signup"} onPress={handleClick} disabled={loading} />
          {error && <Text style={styles.error}>{error}</Text>}
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)", // overlay for better contrast
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: 20,
    borderRadius: 10,
    marginVertical: 30,
  },
  input: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    color: "#000",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});
