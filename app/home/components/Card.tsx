import { router, useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

// Define types for card data
type CardData = {
  id: number;
  title: string;
  imageUrl: any; // Use `any` for require statements
};

// Data for cards
const cardsData: CardData[] = [
  {
    id: 1,
    title: "Book Consultation",

    imageUrl: require("../../../assets/images/consultation.jpg"), // Use require for local images
  },
  {
    id: 2,
    title: "Book Medicine",
    imageUrl: require("../../../assets/images/bookmedicine.jpg"), // Use require for local images
  },
  {
    id: 3,
    title: "Order Medicine",
    imageUrl: require("../../../assets/images/ordermedicine.jpg"), // Use require for local images
  },
];

// Define props for Card component
type CardProps = {
  title: string;
  imageUrl: any;
  onPress: () => void; // Use `any` for require statements
};

// Card Component
const Card: React.FC<CardProps> = ({ title, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={imageUrl} // Use the imageUrl directly
        style={styles.image} // Apply styles
        // Call the onPress function when the card is clicked
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Main Component
const App: React.FC = () => {
  const router = useRouter();
  const handlePress = (title: string) => {
    if (title === "Book Consultation") {
      router.push("/doctor");
    } else if (title === "Book Medicine") {
      router.push("/medicine");
    } else {
      router.push("/ordermedicine");
    }
  };
  return (
    <View style={styles.container}>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          onPress={() => {
            handlePress(card.title);
          }}
        />
      ))}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 150, // Set a fixed height for the image
    borderRadius: 8,
    resizeMode: "cover", // Ensure the image covers the area
  },
});

export default App;
