import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store";

type MenuItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const ProfilePage = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    
    {
      id: "2",
      title: "Book Consultation",
      icon: <FontAwesome name="calendar" size={24} color="#333" />,
      onPress: () => router.push("/doctor"),
    },
    {
      id: "3",
      title: "Order Medicine",
      icon: <MaterialIcons name="payment" size={24} color="#333" />,
      onPress: () => router.push("/ordermedicine"),
    },
    {
      id: "4",
      title: "FAQs",
      icon: <MaterialIcons name="help-outline" size={24} color="#333" />,
      onPress: () => router.push("/faqs"),
    },
    {
      id: "5",
      title: "Logout",
      icon: <AntDesign name="logout" size={24} color="#ff4444" />,
      onPress: () => {
        console.log("User logged out");
        router.replace("/login");
      },
    },
  ];

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Feather name="user" size={60} color="#fff" />
            </View>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <View style={styles.iconContainer}>{item.icon}</View>
                <Text
                  style={[
                    styles.menuText,
                    item.title === "Logout" && styles.logoutText,
                  ]}
                >
                  {item.title}
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#ccc"
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#777",
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  logoutText: {
    color: "#ff4444",
  },
});

export default ProfilePage;
