import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TeacherCard = ({ name, experience, subject }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>Experience: {experience} years</Text>
      <Text style={styles.detail}>Subject: {subject}</Text>
    </View>
  );
};

const Teachers = () => {
  return (
    <View style={styles.container}>
      <TeacherCard name="Rajeev Sharma" experience={5} subject="Mathematics" />
      <TeacherCard name="Anjali Verma" experience={3} subject="Biology" />
      {/* Add more TeacherCard components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
});

export default Teachers;
