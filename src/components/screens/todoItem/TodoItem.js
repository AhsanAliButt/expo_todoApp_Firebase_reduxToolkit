import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native";
import { selectTodo } from "../../../redux/slicer/todoSlicer";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { updateTodo } from "../todoApp";
import {
  deleteData,
  updateData,
  toggleComplete,
  setIsUpdate,
} from "../../../redux/slicer/todoSlicer";

const TodoItem = () => {
  const todo = useSelector((state) => state.todo.todo);

  const updateTodo = (item) => {
    dispatch(setIsUpdate(item));
  };

  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f5f5f5",
            width: 300,
          }}
        >
          {item.completed ? (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 4,
                color: "red",
                textDecoration: "line-through",
              }}
            >
              {item.todo}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 4,
                color: "blue",
              }}
            >
              {item.todo}
            </Text>
          )}
          <View style={{ margin: 10, flexDirection: "row" }}>
            <TouchableOpacity onPress={() => dispatch(deleteData(item))}>
              <MaterialIcons name="delete" size={14} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(toggleComplete(item))}>
              <MaterialIcons name="done" size={14} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateTodo(item)}>
              <MaterialIcons name="edit" size={14} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.uid}
      />
    </View>
  );
};

export default TodoItem;
