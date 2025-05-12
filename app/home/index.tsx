import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Background } from "./components/background";
import HealthArticles from "./components/articles";
import HorizontalOptions from "./components/horizontaloptions";
import CourseList from "./components/CoursesList";

const HomeScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea} edges={["top"]}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <ScrollView contentContainerStyle={styles.scrollContent}>
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
    paddingBottom: 20,
    paddingHorizontal: 16,
    gap: 20, // vertical spacing between blocks
  },
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
  },
});
