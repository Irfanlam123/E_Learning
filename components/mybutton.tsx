import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
export interface MyButtonProps {
  title: string;
  onPress: () => void;
}
const Mybutton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "indigo",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    // borderColor: "indigo",
  },

  text: {
    color: "white",
    fontSize: 20,
  },
});
export default Mybutton;
