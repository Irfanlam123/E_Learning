import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { RootState } from "../store";
import { loginUser } from "./authSlice";

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state: RootState) => state.auth);

  const handleInputChange = (field: string, text: string) => {
    setValue((prev) => ({ ...prev, [field]: text }));
  };

  const handleLogin = async () => {
    const { email, password } = value;

    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      const response = await dispatch(loginUser({ email, password })).unwrap();
      console.log("response login API:", response);

      if (response.role === "student" || response.role === "") {
        router.navigate("/(tabs)");
      } else if (response.role === "teacher") {
        router.push("/teacherpannel");
      } else if (response.role === "admin") {
        router.push("/admin");
      }
    } catch (err: any) {
      Alert.alert("Login Failed", err);
    }
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
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#ccc"
            style={styles.textInput}
            value={value.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />

          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#ccc"
            style={styles.textInput}
            value={value.password}
            secureTextEntry
            onChangeText={(text) => handleInputChange("password", text)}
          />

          <Mybutton title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)", // Dark overlay for contrast
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // semi-transparent white
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  textInput: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    color: "#000",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});

export default Login;
