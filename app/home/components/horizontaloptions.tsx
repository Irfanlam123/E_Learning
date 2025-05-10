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

// Updated options for the e-learning platform
const options = [
  {
    id: "1",
    title: "Art",
    icon: <FontAwesome5 name="paint-brush" size={28} color="#f39c12" />,
    onPress: () => router.push("/art"), // Navigate to Art courses
  },
  {
    id: "2",
    title: "Coding",
    icon: <MaterialIcons name="code" size={28} color="#3498db" />,
    onPress: () => router.push("/coding"), // Navigate to Coding courses
  },
  {
    id: "3",
    title: "Marketing",
    icon: <Ionicons name="md-business" size={28} color="#e74c3c" />,
    onPress: () => router.push("/marketing"), // Navigate to Marketing courses
  },
  {
    id: "4",
    title: "Business",
    icon: <FontAwesome5 name="briefcase" size={28} color="#2ecc71" />,
    onPress: () => router.push("/business"), // Navigate to Business courses
  },
];

const HorizontalOptions = () => {
  return (
    <View style={styles.container}>
      {/* Categories Heading */}
      <Text style={styles.heading}>Categories</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
    marginVertical: 20,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    width: 120,
    height: 100,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
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
