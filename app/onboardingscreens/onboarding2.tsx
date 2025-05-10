import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const OnBoardingsScreen2 = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Card-style Image */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/2ndBoard.png")}
            style={styles.image}
          />
        </View>

        {/* Text and Button Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Start Your Course</Text>
          <Text style={styles.subtitle}>
            We are the best online e-learning platform. Take your top courses from here.
          </Text>

          {/* Progress Dots */}
          <View style={styles.dotsContainer}>
            <View style={styles.inactiveDot} />
            <View style={styles.activeDot} />
            <View style={styles.inactiveDot} />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/onboardingscreens/onboarding3")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OnBoardingsScreen2;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f4f6fa",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: "#f4f6fa",
  },
  card: {
    width: width * 0.9,
    height: width * 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
    lineHeight: 22,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 30,
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
    paddingHorizontal: 40,
    borderRadius: 50,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
