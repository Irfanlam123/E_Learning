import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="apps-outline" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="patient"
        options={{
          title: "Students",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="prescription"
        options={{
          title: "Course",
          tabBarIcon: ({ color }) => (
            <Octicons name="feed-person" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedules",
          tabBarIcon: ({ color }) => (
            <Octicons name="clock" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="file-picture-o" color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
