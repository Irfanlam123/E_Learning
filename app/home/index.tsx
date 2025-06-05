import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Background } from "./components/background";
import HealthArticles from "./components/articles";
import HorizontalOptions from "./components/horizontaloptions";
import CourseList from "./components/CoursesList";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
            backgroundColor="#fff"
          />
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.section}>
              <Background />
            </View>

            <View style={styles.section}>
              <HorizontalOptions />
            </View>

            <View style={styles.section}>
              <CourseList />
            </View>

            <View style={styles.section}>
              <HealthArticles />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 30,
    paddingHorizontal: 16,
    gap: 24,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
});
