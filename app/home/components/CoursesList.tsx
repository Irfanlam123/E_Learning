import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchCourses } from "../homeSlice";

const { width, height } = Dimensions.get("window");

export type Course = {
  ID: number;
  name: string;
  description: string;
  price: number;
  image: string;
  about: string;
  lession: string;
  categories?: string[];
};

const CARD_HEIGHT = width * 0.3 + 24;

const CourseList = () => {
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector((state) => state.article);

  React.useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const renderItem = useCallback(({ item }: { item: Course }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/coursedetails/${item.ID}`)}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <View style={styles.priceAndButton}>
          <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  ), []);

  const keyExtractor = useCallback((item: Course) => item.ID.toString(), []);

  const getItemLayout = useCallback((_, index) => ({
    length: CARD_HEIGHT,
    offset: CARD_HEIGHT * index,
    index,
  }), []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.header}>📘 Popular Courses</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#f39c12" style={styles.loader} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <FlatList
            data={courses}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No courses available</Text>
            }
            initialNumToRender={6}
            maxToRenderPerBatch={6}
            windowSize={10}
            removeClippedSubviews={false}
          />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default React.memo(CourseList);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: width * 0.04,
  },
  header: {
    fontSize: width * 0.055,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 16,
    marginTop: Platform.OS === "android" ? 10 : 0,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: width * 0.03,
    flexDirection: "row",
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 8,
    marginRight: width * 0.03,
    backgroundColor: "#f0f0f0",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: width * 0.043,
    fontWeight: "600",
    color: "#2d3436",
    marginBottom: 4,
    lineHeight: width * 0.052,
  },
  description: {
    fontSize: width * 0.035,
    color: "#636e72",
    lineHeight: width * 0.048,
    marginBottom: 8,
  },
  priceAndButton: {
  flexDirection: "row",
  alignItems: "center",
},

  price: {
    fontSize: width * 0.045,
    fontWeight: "500",
    color: "#2ecc71",
  },
  button: {
    backgroundColor: "#f39c12",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8, 
    marginLeft:6,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.032,
    fontWeight: "500",
  },
  listContent: {
    paddingBottom: height * 0.05,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#e74c3c",
    textAlign: "center",
    marginTop: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#7f8c8d",
    marginTop: 20,
  },
});
