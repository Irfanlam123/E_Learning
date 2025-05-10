// app/dashboard/DoctorDashboardScreen.tsx
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";

const DoctorDashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Doctor Dashboard</Text> 
      <TouchableHighlight
        underlayColor={"white"}
        style={{
          width: "100%",
        }}
        onPress={() => {
          router.navigate("/doctorpannel/appointment");
        }}
      >
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8="  
            }}
   
            style={styles.appointmentImage}
          ></Image>
          <Text style={styles.cardTitle}>Total Appointments </Text>
          <Text style={styles.cardValue}>42</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            }}
   
            style={styles.appointmentImage}
          ></Image>
        <Text style={styles.cardTitle}>Today’s Appointments</Text>
        <Text style={styles.cardValue}>5</Text>
      </View>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661496148632-514dd2197691?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            }}
   
            style={styles.appointmentImage}
          ></Image>
        <Text style={styles.cardTitle}>Pending Approvals</Text>
        <Text style={styles.cardValue}>2</Text>
      </View>

      <View style={styles.card}>
      <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1667520030781-ea2cf0bcb509?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            }}
   
            style={styles.appointmentImage}
          ></Image>
        <Text style={styles.cardTitle}>Patients Consulted</Text>
        <Text style={styles.cardValue}>18</Text>
      </View> 
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20 
   
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
  width: "100%",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  
    
  },
  cardTitle: {
    fontSize: 20,
    color: "black",
    marginTop: 10,
    fontWeight: "bold", // Add this line for bold tex
   
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28a745",
  },
  appointmentImage: {
  
    height: 150,
   width:300,
    marginRight: 15,
  },
});

export default DoctorDashboardScreen;
