import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const OnBoardingsScreen1 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/onboard1.jpg")}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Find the Best Courses</Text>
        <Text style={styles.subtitle}>For Your Career Enhancement!</Text>

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboardingscreens/onboarding2")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingsScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "65%",
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 25,
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
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 50,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
