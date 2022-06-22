import { View, Text } from "react-native";
import React from "react";
import InputForm from "../forms/inputForm";
import { TouchableOpacity } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", margin: 5, fontSize: 24 }}>
        Welcome Please Sign{" "}
      </Text>
      <View style={{ alignItems: "center" }}>
        <InputForm label="UserName" placeHolder="Please Enter Your Username" />
        <InputForm
          label="Password"
          placeHolder={"Please Enter Your Password"}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            color: "white",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
