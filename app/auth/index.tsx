import Mybutton from "@/components/mybutton";
import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

const AuthScreen = () => {
  const router = useRouter();

  const handleClick = (title: string) => {
    if (title === "Login") {
      router.navigate("/auth/login" as RelativePathString);
    } else {
      router.navigate("/auth/signup" as RelativePathString);
    }
  };

  return (
    <ImageBackground
      // src="../../assets/images/login.jpg"
      // source={{
      //   uri: "../../assets/images/signup.webp",
      // }} // Unsplash image URL
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <Mybutton
            title={"Login"}
            onPress={() => {
              handleClick("Login");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Mybutton
            title={"Signup"}
            onPress={() => {
              handleClick("Signup");
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen height
    justifyContent: "center", // Centers the content vertically
    alignItems: "center", // Centers the content horizontally
    paddingHorizontal: 20, // Optional: for some padding on the sides
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    width: "100%", // Ensures button container takes full width
    marginVertical: 10, // Space between buttons
    paddingHorizontal: 20, // Add padding inside the container if needed
  },
});

export default AuthScreen;
