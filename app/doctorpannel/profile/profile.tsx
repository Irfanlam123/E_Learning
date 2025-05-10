import { RootState } from "@/app/store";
import { useAppSelector } from "@/app/store/hooks";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";

const DoctorProfileScreen = () => {
  
  const user = useAppSelector((state: RootState) => state.auth.user);
  console.log("user hai", user);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.mobile || "");
  const [specialization, setSpecialization] = useState("Cardiologist");
  const [fee, setFee] = useState("500");
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1742302954292-1f903368084e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleSave = () => {
    // Send to backend here
    Alert.alert("Saved", "Profile updated successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Doctor Profile</Text>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Specialization</Text>
      <TextInput
        style={styles.input}
        value={specialization}
        onChangeText={setSpecialization}
      />

      <Text style={styles.label}>Consultation Fee (₹)</Text>
      <TextInput
        style={styles.input}
        value={fee}
        onChangeText={setFee}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontWeight: "bold", marginTop: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default DoctorProfileScreen;
