import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const dummyAppointments = [
  {
    id: "1",
    patientName: "Ankit Sharma",
    time: "10:30 AM",
    date: "12 Apr 2025",
    status: "Pending",
  },
  {
    id: "2",
    patientName: "Riya Mehta",
    time: "12:00 PM",
    date: "12 Apr 2025",
    status: "Pending",
  },
  {
    id: "3",
    patientName: "Aman Verma",
    time: "2:00 PM",
    date: "13 Apr 2025",
    status: "Approved",
  },
];

const DoctorAppointmentsScreen = () => {
  const [appointments, setAppointments] = useState(dummyAppointments);

  const handleStatusChange = (id: string, status: string) => {
    const updated = appointments.map((appt) =>
      appt.id === id ? { ...appt, status } : appt
    );
    setAppointments(updated);
    Alert.alert("Updated", `Appointment ${status}`);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.name}>{item.patientName}</Text>
        <Text style={[styles.status, statusStyle(item.status)]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.info}>
        🕒 {item.time} | 📅 {item.date}
      </Text>
      

      {item.status === "Pending" && (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#28a745" }]}
            onPress={() => handleStatusChange(item.id, "Approved")}
          >
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#dc3545" }]}
            onPress={() => handleStatusChange(item.id, "Cancelled")}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Students</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

const statusStyle = (status: string) => {
  switch (status) {
    case "Approved":
      return { color: "#28a745" };
    case "Cancelled":
      return { color: "#dc3545" };
    default:
      return { color: "#ffc107" };
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  status: { fontWeight: "600", fontSize: 14 },
  info: { color: "#555", marginBottom: 6 },
  reason: { fontSize: 14, marginBottom: 10 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default DoctorAppointmentsScreen;
