import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
      <Image source={require("../assets/images/splash.png")} />
      <Text style={styles.text}>Welcome to My App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%", // Ensure background color
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // "cover" if needed
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default SplashScreen;
