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

const TeacherProfileScreen = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  console.log("user hai", user);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.mobile || "");
  const [specialization, setSpecialization] = useState("Mathematics");
  const [fee, setFee] = useState("300");
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=3087&auto=format&fit=crop"
  );

  const handleSave = () => {
    Alert.alert("Success", "Teacher profile updated!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>👩‍🏫 Teacher Profile</Text>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        <Text style={styles.label}>Subject Expertise</Text>
        <TextInput style={styles.input} value={specialization} onChangeText={setSpecialization} />

        <Text style={styles.label}>Hourly Fee (₹)</Text>
        <TextInput style={styles.input} value={fee} onChangeText={setFee} keyboardType="numeric" />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
    color: "#1F2937",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    color: "#111827",
  },
  button: {
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TeacherProfileScreen;
