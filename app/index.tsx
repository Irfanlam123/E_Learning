import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboardingscreens");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to E-Learning App!</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // Slight dark overlay for readability
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
