import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import SignIn from "./src/components/screens/SignIn";
import TodoApp from "./src/components/screens/todoApp";
import store from "./src/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./src/redux/slicer/todoSlicer";
import { selectTodo } from "./src/redux/slicer/todoSlicer";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  useEffect(() => {
    const data = dispatch(getData());
  }, []);

  return <TodoApp />;
}

export default () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <App />
    </Provider>
  );
};
