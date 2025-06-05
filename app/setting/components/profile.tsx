import React, { useEffect, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
  Animated,
  Dimensions,
  ImageBackground
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Ionicons
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store";

const { width } = Dimensions.get('window');

type MenuItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const ProfilePage = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

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

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          onPress: () => {
            Alert.alert(
              "Logged Out",
              "You have been logged out successfully.",
              [{ text: "OK", onPress: () => router.replace("/login") }]
            );
          }
        }
      ]
    );
  };

  const menuItems: MenuItem[] = [
    {
      id: "1",
      title: "My Courses",
      icon: <FontAwesome name="book" size={22} color="#4a90e2" />,
      onPress: () => router.push("/courses"),
    },
    {
      id: "2",
      title: "Teachers",
      icon: <Ionicons name="people-outline" size={22} color="#4a90e2" />,
      onPress: () => router.push("/teacher"),
    },
    {
      id: "3",
      title: "Settings",
      icon: <Feather name="settings" size={22} color="#4a90e2" />,
      onPress: () => router.push("/settings"),
    },
    {
      id: "4",
      title: "Help Center",
      icon: <MaterialIcons name="help-outline" size={22} color="#4a90e2" />,
      onPress: () => router.push("/faqs"),
    },
    {
      id: "5",
      title: "Logout",
      icon: <AntDesign name="logout" size={22} color="#ff6b6b" />,
      onPress: handleLogout,
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f6fa" }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Profile Card */}
          <Animated.View 
            style={[
              styles.profileCard,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
            ]}
          >
            <View style={styles.avatarContainer}>
              {user?.profilePic ? (
                <ImageBackground
                  source={{ uri: user.profilePic }}
                  style={styles.avatarImage}
                  imageStyle={{ borderRadius: 60 }}
                >
                  <View style={styles.avatarOverlay} />
                </ImageBackground>
              ) : (
                <Feather name="user" size={60} color="#fff" />
              )}
            </View>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </Animated.View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => {
              const animValue = useRef(new Animated.Value(0)).current;

              useEffect(() => {
                Animated.spring(animValue, {
                  toValue: 1,
                  delay: index * 100,
                  friction: 5,
                  useNativeDriver: true,
                }).start();
              }, []);

              return (
                <Animated.View
                  key={item.id}
                  style={{
                    opacity: animValue,
                    transform: [{ scale: animValue }]
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.menuItem,
                      item.title === "Logout" && styles.logoutItem
                    ]}
                    onPress={item.onPress}
                    activeOpacity={0.7}
                  >
                    <View style={styles.iconContainer}>{item.icon}</View>
                    <Text style={[
                      styles.menuText,
                      item.title === "Logout" && styles.logoutText
                    ]}>
                      {item.title}
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="#ddd"
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  profileCard: {
    backgroundColor: "#4a90e2",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(74, 144, 226, 0.4)',
    borderRadius: 60,
  },
  userName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  userEmail: {
    fontSize: 15,
    color: "rgba(255,255,255,0.9)",
    marginTop: 4,
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontWeight: '500',
  },
  logoutText: {
    color: "#ff6b6b",
  },
});

export default ProfilePage;
