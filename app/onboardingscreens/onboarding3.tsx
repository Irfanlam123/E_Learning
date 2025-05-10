import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";

const OnBoardingsScreen3 = () => {
  const router = useRouter();
  const handleClick = (title: string) => {
    if (title === "Login") {
      router.navigate("/auth/login");
    } else {
      router.navigate("/auth/signup");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.image}
      />
      <Text style={styles.text} className="text-center">
        Let’s get started!
      </Text>{" "}
      <Text style={styles.text}>Login to Stay healthy and fit</Text>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 10,
        }}
      >
        <Mybutton
          title="Login"
          onPress={() => {
            handleClick("Login");
          }}
        />
        <Mybutton
          title="Signup"
          onPress={() => {
            handleClick("signup");
          }}
        />
      </View>
    </View>
  );
};

export default OnBoardingsScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    paddingTop: 0,
    margin: 0,
  },
  textContainer: {
    flexDirection: "row", // Align text and icon horizontally
    justifyContent: "space-between", // Space between the text and icon
    alignItems: "center", // Align vertically
    // Optional to add space from the image
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
  },
});
