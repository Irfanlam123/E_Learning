import { RootState } from "@/app/store";
import { useAppSelector } from "@/app/store/hooks";
import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export const Background = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left", "top"]}>
        {/* Header with cart icon */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.cartIcon}>
            <FontAwesome name="shopping-cart" size={24} color="#fff" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.content}>
          <View style={styles.profileContainer}>
            <Image
              source={require("../../../assets/images/prof.jpg")}
              resizeMode="cover"
              style={styles.profilePic}
            />
          </View>
          
          <Text style={styles.welcomeText}>
            Welcome back,{"\n"}
            <Text style={styles.userName}>{user?.name || "Guest"}!</Text>
          </Text>
          
          <Text style={styles.subtext}>
            How's your career journey going with us?
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A89DC",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
  },
  cartIcon: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#FF5E3A',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.1,
  },
  profileContainer: {
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  profilePic: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.3 / 2,
    borderWidth: 3,
    borderColor: '#fff',
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 32,
  },
  userName: {
    fontWeight: "700",
    fontSize: 28,
  },
  subtext: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 40,
    lineHeight: 24,
  },
});