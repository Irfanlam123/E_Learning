import { View, Text, StyleSheet } from "react-native";
import Notification from "../notifications";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Notification />
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
