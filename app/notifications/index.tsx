import { View, Text, Image } from "react-native";
import React from "react";

const Notification = () => {
  return (
    <View>
      <Text>No new notification</Text>
      <Image
        source={require("@/assets/images/notification.png")}
        style={{
          width: "100%",

          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default Notification;
