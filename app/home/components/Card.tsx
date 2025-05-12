import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;

const course =
 
{
    id: "2",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1660806982611-0a41c0527966?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }


export default function CourseList() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Popular Courses</Text>

      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.category}>{course.category}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{course.price}</Text>
            <TouchableOpacity style={styles.badge}>
              <Text style={styles.badgeText}>Best Seller</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 12,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E90FF", // Blue color for course title
  },
  category: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  badge: {
    backgroundColor: "#FFF59D", // light yellow
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  badgeText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "600",
  },
});
