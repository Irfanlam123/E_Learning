import { View, Text, StyleSheet } from "react-native";
import React from "react";

// Patient Card Component
const StudentCard = ({ name, age, condition }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>Age: {age}</Text>
      <Text style={styles.detail}>Condition: {condition}</Text>
    </View>
  );
};

// Main Patients Screen
const Patients = () => {
  return (
    <View style={styles.container}>
      <StudentCard name="Amit Kumar" age={32} course="Coding" />
      <StudentCard name="Amit Kumar" age={32} course="Coding" />
      <StudentCard name="Amit Kumar" age={32} course="Coding" />

      {/* Add more PatientCard as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: "#666",
  },
});

export default Patients;
