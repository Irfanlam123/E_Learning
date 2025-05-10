import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MedicineList from "./components/medicineList";

const OrderMedicine: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MedicineList />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default OrderMedicine;
