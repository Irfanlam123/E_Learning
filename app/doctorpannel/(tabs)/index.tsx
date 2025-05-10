import { View, Text, StyleSheet } from "react-native";

import DoctorDashboardScreen from "../dashboard/dashboard";

export default function Tab() {
  return (
    <View style={styles.container}>
      <DoctorDashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
