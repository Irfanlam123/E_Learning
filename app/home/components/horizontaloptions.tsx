import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const screenWidth = Dimensions.get("window").width;
const CARD_WIDTH = Math.min(screenWidth / 4.2, 100); // Smaller width
const CARD_HEIGHT = CARD_WIDTH * 1.05; // Reduced height

const options = [
  {
    id: "1",
    title: "Coding",
    icon: <MaterialIcons name="code" size={18} color="#3498db" />,
    onPress: () => router.push("/coding"),
  },
  {
    id: "2",
    title: "Editing",
    icon: <MaterialIcons name="video-library" size={18} color="#1abc9c" />,
    onPress: () => router.push("/video-editing"),
  },
  {
    id: "3",
    title: "Finance",
    icon: <MaterialIcons name="attach-money" size={18} color="#2c3e50" />,
    onPress: () => router.push("/finance"),
  },
 
];

const HorizontalOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="start"
      >
        {options.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalOptions;

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    paddingHorizontal: 14,
    marginBottom: 24, // ✅ Added bottom space here
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 10,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
  },
  scrollContent: {
    paddingRight: 14,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#eee",
  },
  iconContainer: {
    marginBottom: 6,
    backgroundColor: "#f0f3f5",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 11,
    fontWeight: "500",
    color: "#34495e",
    textAlign: "center",
    marginTop: 4,
    width: "90%",
  },
});
