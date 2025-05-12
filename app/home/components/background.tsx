import { RootState } from "@/app/store";
import { useAppSelector } from "@/app/store/hooks";
import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons"; // Cart icon

export const Background = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>

        {/* Cart Icon - Top Right */}
        <TouchableOpacity style={styles.cartIcon}>
          <FontAwesome name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.flexContainer}>
          <View style={styles.content}>
            <Image
              source={require("../../../assets/images/prof.jpg")}
              resizeMode="cover"
              style={styles.profilePic}
            />
            <Text style={styles.text}>Welcome {user?.name}!</Text>
            <Text style={styles.subtext}>How's your career journey going with us?

</Text>

            {/* Search Input Below Text */}
            <TextInput
              style={styles.searchInput}
              placeholder="Search Courses..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6CA6CD", // Darker sky blue
  },
  cartIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },
  flexContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#6CA6CD",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: "#6CA6CD",
    marginLeft: 30,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  subtext: {
    color: "#FFFF",
    fontSize: 18,
    textAlign: "center",
  },
  searchInput: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingLeft: 15,
    fontSize: 16,
    marginTop: 20,
  },
});
