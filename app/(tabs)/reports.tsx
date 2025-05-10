import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../home";
import Report from "../home/components/report";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Report />
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
