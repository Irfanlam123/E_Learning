import { View, Text, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import DoctorCard from "./components/doctorListCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://192.168.1.11:8080/doctors");

        const data = await response.json();
        console.log("Fetched Doctors:", data);
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);
  console.log("docotrs fetching...", doctors);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container} edges={["top"]}>
            <ScrollView style={styles.scrollView}>
              <DoctorCard />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    </GestureHandlerRootView>
  );
};

export default DoctorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    width: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});
