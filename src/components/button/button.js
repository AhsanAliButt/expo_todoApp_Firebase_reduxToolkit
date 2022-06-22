import { View, Text, Button } from "react-native";
import React from "react";

const Buttons = ({ title, onPress, color, style, ...props }) => {
  return (
    <View>
      <Button title={title} color={color} onPress={onPress} style={style} />
    </View>
  );
};

export default Buttons;
