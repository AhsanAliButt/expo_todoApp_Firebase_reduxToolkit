import { View, Text, TextInput } from "react-native";
import React from "react";

const InputForm = ({
  label,
  value,
  isSecure,
  onChangeText,
  placeHolder,
  multiline,
  onFocus,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 8,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        multiline={multiline}
        onFocus={onFocus}
        style={{
          borderWidth: 1,
          borderColor: "blue",
          color: "black",
          width: "65%",
          borderRadius: 3,
        }}
        placeholderTextColor="black"
        {...props}
      />
    </View>
  );
};

export default InputForm;
