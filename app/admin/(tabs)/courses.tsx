import { View, Text, StyleSheet } from "react-native";
import React from "react";

// Course Card Component
const CourseCard = ({ title, duration, level }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>Duration: {duration}</Text>
      <Text style={styles.detail}>Level: {level}</Text>
    </View>
  );
};

// Main Courses Screen
const Courses = () => {
  return (
    <View style={styles.container}>
      <CourseCard title="React Native Basics" duration="4 Weeks" level="Beginner" />
      <CourseCard title="Advanced Backend with Go" duration="6 Weeks" level="Advanced" />
      {/* Add more courses if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
});

export default Courses;
