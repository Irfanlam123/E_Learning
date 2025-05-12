import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

export default function DashboardCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>👨‍🏫 Mentors</Text>
        <Text style={styles.value}>12</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>🎓 Students</Text>
        <Text style={styles.value}>58</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>📅 Bookings</Text>
        <Text style={styles.value}>24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    gap: 12,
  },
  card: {
    width: screenWidth - 20, // full width minus padding
    backgroundColor: "#ffffff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginBottom: 10,
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007bff",
  },
});
