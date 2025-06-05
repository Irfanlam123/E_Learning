import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type ReportItem = {
  id: string;
  title: string;
  date: string;
  type: string;
};

const reports: ReportItem[] = [
  { id: "1", title: "Course Progress Report", date: "March 20, 2024", type: "PDF" },
  { id: "2", title: "Attendance Summary", date: "March 18, 2024", type: "Image" },
  { id: "3", title: "Performance Analysis", date: "March 15, 2024", type: "PDF" },
];

const ReportCard: React.FC<{ item: ReportItem; index: number }> = ({ item, index }) => {
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay: index * 100,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <View style={styles.iconContainer}>
        {item.type === "PDF" ? (
          <FontAwesome5 name="file-pdf" size={28} color="#e74c3c" />
        ) : (
          <FontAwesome5 name="file-image" size={28} color="#3498db" />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.dateContainer}>
            <Feather name="calendar" size={14} color="#7f8c8d" />
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View
            style={[
              styles.typeBadge,
              { backgroundColor: item.type === "PDF" ? "#e74c3c20" : "#3498db20" },
            ]}
          >
            <Text
              style={[
                styles.typeText,
                { color: item.type === "PDF" ? "#e74c3c" : "#3498db" },
              ]}
            >
              {item.type}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Viewing:", item.title)}
        activeOpacity={0.8}
      >
        <MaterialIcons name="visibility" size={20} color="#fff" />
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Report = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Course Reports</Text>
        <Text style={styles.subHeader}>Your academic performance overview</Text>
      </View>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ReportCard item={item} index={index} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    fontFamily: "sans-serif-medium",
  },
  subHeader: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#7f8c8d",
    marginLeft: 5,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },
});

export default Report;
