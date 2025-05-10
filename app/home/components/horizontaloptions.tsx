import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const options = [
  {
    id: "1",
    title: "Top Doctors",
    icon: <FontAwesome5 name="user-md" size={28} color="#4a90e2" />,
    onPress: () => router.push("/doctor"), // Navigate to the Doctors screen on press`
  },
  {
    id: "2",
    title: "Pharmacy",
    icon: <MaterialIcons name="local-pharmacy" size={28} color="#e74c3c" />,
    onPress: () => router.push("/ordermedicine"),
  },
  {
    id: "3",
    title: "Other Services",
    icon: <Ionicons name="md-options" size={28} color="#27ae60" />,
    onPress: () => alert("Other Services not available now"),
  },
];

const HorizontalOptions = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {options.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={item.onPress}
          >
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalOptions;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingLeft: 10,
  },
  card: {
    width: 120,
    height: 100,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
});
