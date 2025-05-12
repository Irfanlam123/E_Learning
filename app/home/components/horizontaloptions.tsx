import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Feather,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { router } from "expo-router";

const options = [
  {
    id: "1",
    title: "Art",
    icon: <FontAwesome5 name="paint-brush" size={28} color="#f39c12" />,
    onPress: () => router.push("/art"),
  },
  {
    id: "2",
    title: "Coding",
    icon: <MaterialIcons name="code" size={28} color="#3498db" />,
    onPress: () => router.push("/coding"),
  },
  {
    id: "3",
    title: "Marketing",
    icon: <Ionicons name="md-business" size={28} color="#e74c3c" />,
    onPress: () => router.push("/marketing"),
  },
  {
    id: "4",
    title: "Business",
    icon: <FontAwesome5 name="briefcase" size={28} color="#2ecc71" />,
    onPress: () => router.push("/business"),
  },
  {
    id: "5",
    title: "UI/UX",
    icon: <Feather name="layout" size={28} color="#9b59b6" />,
    onPress: () => router.push("/uiux"),
  },
  {
    id: "6",
    title: "Figma Design",
    icon: <AntDesign name="antdesign" size={28} color="#e67e22" />,
    onPress: () => router.push("/figma"),
  },
  {
    id: "7",
    title: "Video Editing",
    icon: <MaterialIcons name="video-library" size={28} color="#1abc9c" />,
    onPress: () => router.push("/video-editing"),
  },
  {
    id: "8",
    title: "Photography",
    icon: <Entypo name="camera" size={28} color="#e84393" />,
    onPress: () => router.push("/photography"),
  },
  {
    id: "9",
    title: "Data Science",
    icon: <FontAwesome5 name="database" size={28} color="#2980b9" />,
    onPress: () => router.push("/data-science"),
  },
  {
    id: "10",
    title: "Finance",
    icon: <MaterialIcons name="attach-money" size={28} color="#2c3e50" />,
    onPress: () => router.push("/finance"),
  },
];

const HorizontalOptions = () => {
  return (
    <View style={styles.container}>
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
    width:400
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
    backgroundColor: "#5DADE2", // Darker sky blue
    borderRadius: 12,
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
    color: "#fff", // White text
    textAlign: "center",
  },
});
