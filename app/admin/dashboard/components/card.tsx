import { View, Text } from "react-native";
import React from "react";

export default function Card() {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 100,
          paddingVertical: 20,

          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        No of Doctors 5
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 100,
          paddingVertical: 20,

          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        No of Patient 20
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 100,
          paddingVertical: 20,

          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        No of Appointment 20
      </View>
    </View>
  );
}
