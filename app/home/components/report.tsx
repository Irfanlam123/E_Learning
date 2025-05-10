import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

type ReportItem = {
  id: string;
  title: string;
  date: string;
  type: string;
};

const reports: ReportItem[] = [
  { id: "1", title: "Blood Test Report", date: "March 20, 2024", type: "PDF" },
  { id: "2", title: "X-Ray Report", date: "March 18, 2024", type: "Image" },
  { id: "3", title: "MRI Scan Report", date: "March 15, 2024", type: "PDF" },
];

const Report = () => {
  const renderItem = ({ item }: { item: ReportItem }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="file-medical" size={24} color="#4a90e2" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Viewing:", item.title)}
      >
        <MaterialIcons name="visibility" size={22} color="#fff" />
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Reports</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Report;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
});
