import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";

const { width } = Dimensions.get("window");

const OnBoardingsScreen3 = () => {
  const router = useRouter();

  const handleClick = (title: string) => {
    if (title === "Login") {
      router.navigate("/auth/login");
    } else {
      router.navigate("/auth/signup");
    }
  };

  const handleSkip = () => {
    router.replace("/home"); // Replace with actual route
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Card-style image */}
      <View style={styles.imageCard}>
        <Image
          source={require("../../assets/images/onboard2.jpg")}
          style={styles.image}
        />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let’s get started!</Text>
        <Text style={styles.subtitle}>Login to stay connected with US!</Text>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.activeDot} />
        </View>

        {/* Login & Signup Buttons */}
        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <Mybutton title="Login" onPress={() => handleClick("Login")} />
          </View>
          <View style={styles.buttonWrapper}>
            <Mybutton title="Signup" onPress={() => handleClick("signup")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingsScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fa",
    alignItems: "center",
    paddingTop: 50,
  },
  skipButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#FFFF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
    zIndex: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  skipText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageCard: {
    width: width * 0.9,
    height: width * 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginTop: 60, // 👈 Space between Skip button and image
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 24,
    maxWidth: 280,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 28,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007bff",
    marginHorizontal: 6,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 6,
  },
});
