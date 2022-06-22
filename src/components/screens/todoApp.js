import { View, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../forms/inputForm";
import Buttons from "../button/button";
import { TouchableOpacity } from "react-native";
import { addData } from "../../redux/slicer/todoSlicer";
import TodoItem from "./todoItem/TodoItem";

const todoApp = () => {
  const [todo, setTodo] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const dispatch = useDispatch();

  const addTodo = () => {
    const data = dispatch(addData({ todo, completed: false }));
    console.log(data);
  };

  return (
    <View style={{}}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontFamily: " Roboto-Medium ",
          fontWeight: "bold",
        }}
      >
        Todo App
      </Text>
      <View style={{ margin: 5, alignItems: "center" }}>
        <InputForm
          placeholder="Plz Enter Your Task Here"
          onChangeText={(val) => setTodo(val)}
          value={todo}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: "50%",
            borderRadius: 5,
            backgroundColor: "#f5f5f5",
          }}
          onPress={() => addTodo()}
        >
          <Text style={{ color: "red", textAlign: "center" }}>Add Todo</Text>
        </TouchableOpacity>
      </View>

      <TodoItem />
    </View>
  );
};

export default todoApp;
