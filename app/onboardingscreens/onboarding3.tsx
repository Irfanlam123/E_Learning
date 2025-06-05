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

  return (
    <View style={styles.container}>
      {/* Image with decorative border */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/onboard2.jpg")}
          style={styles.image}
        />
        <View style={styles.imageBorder} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Let's Get Started!</Text>
        <Text style={styles.subtitle}>
          Login to your account or sign up to begin your journey with us
        </Text>

        {/* Progress indicators */}
        <View style={styles.dotsContainer}>
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.activeDot} />
        </View>

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          <Mybutton 
            title="Login" 
            onPress={() => handleClick("Login")} 
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
          <Mybutton 
            title="Sign Up" 
            onPress={() => handleClick("signup")} 
            style={styles.signupButton}
            textStyle={styles.signupButtonText}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingsScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 40,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    position: "relative",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: width * 0.45,
    resizeMode: "cover",
  },
  imageBorder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: width * 0.4,
    borderWidth: 8,
    borderColor: "rgba(0, 123, 255, 0.1)",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2d3436",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#636e72",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007bff",
    marginHorizontal: 6,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#dfe6e9",
    marginHorizontal: 6,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  loginButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 12,
    paddingVertical: 14,
  },
  loginButtonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#007bff",
    borderRadius: 12,
    paddingVertical: 14,
  },
  signupButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});