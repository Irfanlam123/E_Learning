import React from "react";
import { View, Text, StyleSheet } from "react-native";

import UploadPrescription from "./components/uploadPriscription";

const BookMedicine: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UploadPrescription />

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

export default BookMedicine;
