import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import TopCard from "./components/topCard";
import { ScrollView } from "react-native-gesture-handler";

const DoctorDetailsScreen = () => {
  const { id } = useLocalSearchParams(); // Get the doctor id from URL param
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const URI=process.env.EXPO_PUBLIC_API_URL;
  useEffect(() => {
    if (id) {
      axios
        .get(`${URI}/doctor/${id}`) // Adjust this to your real endpoint
        .then((response) => {
          setDoctor(response.data);
        })
        .catch((error) => {
          console.error("Error fetching doctor details", error);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;
  }

  if (!doctor) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Doctor not found
      </Text>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Image source={{ uri: doctor.image }} style={styles.image} />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.label}>Availability: {doctor.availability}</Text>
        <Text style={styles.label}>Fee: ₹{doctor.fee}</Text>
        <Text style={styles.label}>Email: {doctor.email}</Text>
        <Text style={styles.label}>Phone: {doctor.phone}</Text>
        <Text style={styles.label}>
          Schedule: {new Date(doctor.schedule).toLocaleString()}
        </Text>
      </View>

      {/* Book Appointment Card */}
      <TopCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  specialization: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    color: "#444",
  },
});

export default DoctorDetailsScreen;
