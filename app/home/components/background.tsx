import { RootState } from "@/app/store";
import { useAppSelector } from "@/app/store/hooks";
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export const Background = () =>{
  const user = useAppSelector((state: RootState) => state.auth.user);
console.log("user", user);
  return(
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <View style={styles.flexContainer}>
        <View style={styles.content}>
          <Image
            source={require("../../../assets/images/onboarding2.png")}
            resizeMode="cover"
            style={styles.profilePic}
          />
          <Text style={styles.text}>Welcome {user?.name}!</Text>
          <Text style={styles.subtext}>How is it going tommoror?</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/home.png")}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  </SafeAreaProvider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#ADD8E6",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: "#ADD8E6",
    marginLeft: 30,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "center",
  },
  subtext: {
    color: "gray",
    fontSize: 15,

    textAlign: "center",
  },
});
