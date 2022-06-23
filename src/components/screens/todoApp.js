import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../forms/inputForm";
import { TouchableOpacity } from "react-native";
import { addData, updateSideEffect } from "../../redux/slicer/todoSlicer";
import TodoItem from "./todoItem/TodoItem";

const todoApp = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const isUpdate = useSelector((state) => state.todo.isUpdate);
  const updateTodo = useSelector((state) => state.todo.updateTodo);

  const addTodo = () => {
    if (isUpdate) {
      dispatch(updateSideEffect({ ...updateTodo, todo }));
      return;
    }
    const data = dispatch(addData({ todo, completed: false }));
    console.log(data);
  };

  useEffect(() => {
    setTodo(updateTodo.todo);
  }, [updateTodo]);

  return (
    <View style={{ backgroundColor: "gray", height: "100%" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Todo App
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            margin: 2,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <InputForm
            placeholder="Plz Enter Your Task Here"
            onChangeText={(val) => setTodo(val)}
            value={todo}
            maxLength={25}
            style={{
              fontWeight: "bold",
              fontSize: 14,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              margin: 5,
              padding: 4,
              marginTop: 13,
            }}
          />
          {isUpdate ? (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 5,
                height: 30,
                borderRadius: 10,
                backgroundColor: "#f5f5f5",
              }}
              onPress={() => addTodo()}
            >
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  padding: 5,
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 5,
                height: 30,
                borderRadius: 10,
                backgroundColor: "#f5f5f5",
              }}
              onPress={() => addTodo()}
            >
              <Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TodoItem />
      </View>
    </View>
  );
};

export default todoApp;
