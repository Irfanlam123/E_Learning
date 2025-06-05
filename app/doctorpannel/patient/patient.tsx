// app/patients/PatientDetailsScreen.tsx
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { fetchPatients } from "./patientSlice";
import { Patient } from "./patientSlice";

// Helper function to safely display values
const safeDisplay = (value: any, fallback: string = "Not available") => {
  if (value === null || value === undefined || value === "") {
    return <Text style={styles.unavailable}>{fallback}</Text>;
  }
  return value;
};

const PatientDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const { patients, loading, error } = useAppSelector((state) => state.patient);
  const [refreshing, setRefreshing] = useState(false);
console.log("fetch students",patients);
  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchPatients()).finally(() => setRefreshing(false));
  };

  const renderPatient = ({ item }: { item: Patient }) => (
    <View style={styles.card}>
      <Text style={styles.name}>
        {safeDisplay(item.name, "Name not available")}
      </Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Age:</Text>
        {safeDisplay(item.age, "Age not recorded")}
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Gender:</Text>
        {safeDisplay(item.gender, "Not specified")}
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Phone:</Text>
        {safeDisplay(item.phone, "Phone not available")}
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Email:</Text>
        {safeDisplay(item.email, "Email not available")}
      </View>

      {item.dignosis && (
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Diagnosis:</Text>
          {safeDisplay(item.dignosis, "No diagnosis recorded")}
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("PatientHistory", { patientId: item.id })
        }
      >
        <Text style={styles.buttonText}>View Full History</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error}</Text>
        <TouchableOpacity onPress={() => dispatch(fetchPatients())}>
          <Text style={styles.retry}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patient List</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={renderPatient}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#007bff"]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No patients found</Text>
            <TouchableOpacity onPress={() => dispatch(fetchPatients())}>
              <Text style={styles.retry}>Refresh</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    flexWrap: "wrap",
  },
  infoLabel: {
    fontSize: 14,
    color: "#555",
    marginRight: 4,
    fontWeight: "500",
  },
  unavailable: {
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  error: { color: "red", marginBottom: 10, textAlign: "center" },
  retry: {
    color: "#007bff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
});

export default PatientDetailsScreen;
