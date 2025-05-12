import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";

type Course = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses");
        const courseData = response.data.map((course: any) => ({
          ...course,
          id: course.id || Math.random(), // Random ID fallback if id is missing
        }));
        setCourses(courseData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const renderItem = ({ item }: { item: Course }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceAndButton}>
          <Text style={styles.price}>₹{item.price}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log(`View details of ${item.name}`)}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📘 Popular Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: "flex-start", // Align image and info at the start
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#34495e",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#7f8c8d",
    marginVertical: 4,
  },
  priceAndButton: {
    flexDirection: "row", // Align price and button horizontally
    justifyContent: "space-between", // Space them out evenly
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#27ae60",
  },
  button: {
    backgroundColor: "#f1c40f", // Light yellow color
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
