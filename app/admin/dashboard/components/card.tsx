import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

const data = [
  { icon: "👨‍🏫", label: "Mentors", value: 12, color: "#4e89ff" },
  { icon: "🎓", label: "Students", value: 58, color: "#34c759" },
  { icon: "📅", label: "Bookings", value: 24, color: "#ff9500" },
];

export default function DashboardCard() {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: item.color + "20" }]}>
          <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>
          <Text style={styles.title}>{item.label}</Text>
          <Text style={[styles.value, { color: item.color }]}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 12,
    gap: 16,
  },
  card: {
    width: screenWidth - 24,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
    color: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  value: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
