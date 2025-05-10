import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginUser } from "./authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";


const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useAppDispatch();

  
  // Getting loading and error states from Redux
  const { loading, error, user } = useAppSelector((state: RootState) => state.auth);

  // Handle input changes
  const handleInputChange = (field: string, text: string) => {
    setValue((prev) => ({ ...prev, [field]: text }));
  };

  // Handle Login Button
  const handleLogin = async () => {
    const { email, password } = value;

    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      // ➡️ Dispatching the login API call
      const response = await dispatch(loginUser({ email, password })).unwrap();
      console.log("reponse lgin api me",response); // Logging the response for debugging
      
// router.navigate("/(tabs)");
//       // Handle the response from the API call
//       // You can navigate to different screens based on the response
//       // For example, if the response is successful, navigate to the home screen
//       // Redirect based on user role
      if (response.role ==="patient"||response.role==="") {
        router.navigate("/(tabs)");
      } else if (response.role === "doctor") {
        router.push("/doctorpannel");
      } else if (response.role === "admin") {
        router.push("/admin");
      }
    } catch (err: any) {
      Alert.alert("Login Failed", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={styles.image}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Enter Your Email"
          style={styles.textInput}
          value={value.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <TextInput
          placeholder="Enter Your Password"
          style={styles.textInput}
          value={value.password}
          secureTextEntry
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <Mybutton title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
