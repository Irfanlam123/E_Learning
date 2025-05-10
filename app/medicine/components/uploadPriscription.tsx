import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import FileUploader from "../components/fileUploader";
import { router, useRouter } from "expo-router";
const UploadPrescription = () => {
  const router = useRouter();
  const [fileUri, setFileUri] = useState<string | null>(null);

  const handleOrder = () => {
    if (!fileUri) {
      Alert.alert(
        "Error",
        "Please upload a prescription before placing an order."
      );
      return;
    } else {
      Alert.alert(
        "Order Placed",
        "Your medicine order has been placed successfully!"
      );
      router.push("/ordermedicine");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Your Prescription</Text>
      <FileUploader onFileSelected={(uri) => setFileUri(uri)} />

      <TouchableOpacity
        style={[styles.orderButton, !fileUri && styles.disabledButton]}
        onPress={handleOrder}
        disabled={!fileUri}
      >
        <Text
          style={styles.orderText}
          onPress={() => {
            handleOrder();
          }}
        >
          Confirm Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#cfdbfd",
    width: "100%",
  },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  orderButton: {
    backgroundColor: "indigo",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  disabledButton: { backgroundColor: "gray" },
  orderText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default UploadPrescription;
