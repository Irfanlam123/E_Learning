import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Checkbox } from "react-native-paper";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DoctorScheduleScreen = () => {
  const [availability, setAvailability] = useState<{ [day: string]: boolean }>(
    {}
  );
  const [timeSlot, setTimeSlot] = useState("10:00 AM - 1:00 PM");

  const toggleDay = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const handleSave = () => {
    // Here you would send the availability + timeSlot to backend
    Alert.alert("Saved", "Availability schedule saved!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Set Availability</Text>
      {daysOfWeek.map((day) => (
        <View key={day} style={styles.dayRow}>
          <Text>{day}</Text>
          <Checkbox
            status={availability[day] ? "checked" : "unchecked"}
            onPress={() => toggleDay(day)}
          />
        </View>
      ))}

      <Text style={styles.label}>Time Slot</Text>
      <TouchableOpacity style={styles.slotBox}>
        <Text style={{ fontSize: 16 }}>{timeSlot}</Text>
        {/* Implement time picker if needed */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Schedule</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  dayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: { marginTop: 20, marginBottom: 6, fontWeight: "bold" },
  slotBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default DoctorScheduleScreen;
