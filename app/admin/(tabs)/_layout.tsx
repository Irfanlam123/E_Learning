import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
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
        name="teachers"
        options={{
          title: "Teachers",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          title: "Students",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
