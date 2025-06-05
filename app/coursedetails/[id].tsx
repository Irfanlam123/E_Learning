import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Course } from "../home/components/CoursesList";
import axios from "axios";

const CourseListDetails = () => {
  const { id } = useLocalSearchParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/courses/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  const handleEnroll = () => {
    Alert.alert(
      "Enrollment Successful",
      "You have successfully enrolled in this course.",
      [{ text: "OK" }]
    );
  };

  if (!course) {
    return (
      <View style={styles.center}>
        <Text>Loading course details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Image and Basic Info */}
      <Image
        source={{ uri: course.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {/* Tab-like Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>{course.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lesson</Text>
        <TouchableOpacity onPress={() => handleOpenLink(course.lession)}>
          <Text style={[styles.sectionText, { color: "#007bff" }]}>
            Watch Lesson
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Review</Text>
        <Text style={styles.sectionText}>⭐⭐⭐⭐☆ (4/5)</Text>
      </View>

      {/* Price + Enroll Button */}
      <View style={styles.footer}>
        <Text style={styles.price}>₹{course.price}</Text>
        <TouchableOpacity style={styles.button} onPress={handleEnroll}>
          <Text style={styles.buttonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseListDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: "#555",
  },
  section: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 14,
    color: "#333",
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
