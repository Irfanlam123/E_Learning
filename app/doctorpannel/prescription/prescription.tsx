// app/prescriptions/PrescriptionFormScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useAppDispatch } from "@/app/store/hooks";
import { createPrescription } from "./prescriptionSlice";


const PrescriptionFormScreen = () => {
  const dispatch = useAppDispatch();
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    console.log("Submitted");
    if (!patientName || !doctorName || !symptoms || !diagnosis || !medicine) {
      Alert.alert("Missing Fields", "Please fill all required fields.");
      return;
    }

    const newPrescription = {
      patient_id: 1, // This should be dynamically set based on selected patient
      doctor_id: 1,  // This should be dynamically set based on logged-in doctor
      patient_name: patientName,
      doctor_name: doctorName,
      pdf_path: "",  // You can populate this later if you generate a PDF
      medications: [
        {
          name: medicine,
          dosage: "500mg",
          form: "Tablet",
          frequency: "Thrice Daily",
          duration: "5 Days",
          special_instructions: notes,
          before_after_food: "After Food",
        },
      ],
    };

    try {
      await dispatch(createPrescription(newPrescription)).unwrap();
      Alert.alert("Success", "Prescription created successfully!");
      setPatientName("");
      setDoctorName("");
      setSymptoms("");
      setDiagnosis("");
      setMedicine("");
      setNotes("");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create prescription");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Prescription Form</Text>

      <Text style={styles.label}>Patient Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ravi Kumar"
        value={patientName}
        onChangeText={setPatientName}
      />

      <Text style={styles.label}>Doctor Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Dr. Smith"
        value={doctorName}
        onChangeText={setDoctorName}
      />

      <Text style={styles.label}>Symptoms</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. fever, cough"
        value={symptoms}
        onChangeText={setSymptoms}
      />

      <Text style={styles.label}>Diagnosis</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Viral Infection"
        value={diagnosis}
        onChangeText={setDiagnosis}
      />

      <Text style={styles.label}>Medicines</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Paracetamol 500mg - 1 tab thrice daily"
        value={medicine}
        onChangeText={setMedicine}
      />

      <Text style={styles.label}>Additional Notes</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Any advice or precautions"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Prescription</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default PrescriptionFormScreen;
