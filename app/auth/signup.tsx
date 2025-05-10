import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signupUser } from "./authSlice";
import { Picker } from "@react-native-picker/picker"; // Correct import statement


const Signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  // State for form values
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    role: "", // Add role state
  });

  // Handle Change for Inputs
  const handleChange = (key: string, val: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  // Handle Signup button click
  const handleClick = () => {
    if (!value.name || !value.email || !value.password || !value.mobile || !value.address || !value.role) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    dispatch(signupUser(value))
      .unwrap()
      .then(() => {
        Alert.alert("Success", "User registered successfully!");
        router.push("/auth/login"); // Navigate to login screen after signup
      })
      .catch((err) => {
        Alert.alert("Error", err);
      });
  };

  return (
    <View>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          resizeMode: "cover",
          height: 200,
        }}
      />
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        <TextInput
          placeholder="Enter Your Name"
          value={value.name}
          onChangeText={(text) => handleChange("name", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Email"
          value={value.email}
          onChangeText={(text) => handleChange("email", text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Password"
          value={value.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Mobile Number"
          value={value.mobile}
          onChangeText={(text) => handleChange("mobile", text)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Address"
          value={value.address}
          onChangeText={(text) => handleChange("address", text)}
          style={styles.input}
        />

        {/* Role Selection - Use select for web compatibility */}
        {typeof window !== "undefined" && window.document ? ( // Check if we're on the web
          <select
            value={value.role}
            onChange={(e) => handleChange("role", e.target.value)}
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        ) : (
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
        )}

        <Mybutton title={loading ? "Signing Up..." : "Signup"} onPress={handleClick} disabled={loading} />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default Signup;

const styles = {
  input: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
};
