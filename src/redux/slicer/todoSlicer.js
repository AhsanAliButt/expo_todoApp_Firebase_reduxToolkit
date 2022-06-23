import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase";
import {
  getDocs,
  collection,
  setDoc,
  deleteDoc,
  updateDoc,
  doc,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const collectionRef = collection(db, "todo");

export const addData = createAsyncThunk("todoSlice/addData", async (todo) => {
  const data = await addDoc(collectionRef, todo);
  const localData = { ...todo, uid: data.id };
  return localData;
});

export const getData = createAsyncThunk("todoSlice/getData", async () => {
  const data = [];
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.docs.forEach((childData) => {
    data.push({ ...childData.data(), uid: childData.id });
  });
  return data;
});
export const deleteData = createAsyncThunk(
  "todoSlice/deleteData",
  async (todo) => {
    await deleteDoc(doc(db, "todo", todo.uid));
    return todo;
  }
);

export const toggleComplete = createAsyncThunk(
  "todoSlice/toggleComplete",
  async (todo) => {
    await setDoc(doc(db, "todo", todo.uid), {
      ...todo,
      completed: !todo.completed,
    });
    return todo;
  }
);

export const updateSideEffect = createAsyncThunk(
  "todoSlice/updateSideEffect",
  async (todo) => {
    await updateDoc(doc(db, "todo", todo.uid), todo);
    return todo;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    error: false,
    pending: false,
    isUpdate: false,
    updateTodo: {},
  },
  reducers: {
    setIsUpdate: (state, action) => {
      console.log("SetUpdateReducer:>>", action.payload);
      state.isUpdate = true;
      state.updateTodo = action.payload;
    },
  },
  extraReducers: {
    [addData.fulfilled]: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    [addData.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [addData.pending]: (state, action) => {
      state.pending = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.todo = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [getData.pending]: (state, action) => {
      state.pending = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      const data = state.todo.filter((item) => item.uid !== action.payload.uid);
      state.todo = data;
    },
    [deleteData.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [toggleComplete.fulfilled]: (state, action) => {
      const data = state.todo.map((item) => {
        if (item.uid === action.payload.uid) {
          return { ...item, completed: !action.payload.completed };
        } else return item;
      });
      state.todo = data;
    },
    [toggleComplete.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [updateSideEffect.fulfilled]: (state, action) => {
      state.isUpdate = false;
      const data = state.todo.map((item) => {
        if (item.uid === action.payload.uid) {
          return { ...item, ...action.payload };
        } else return item;
      });
      state.todo = data;
    },
    [updateSideEffect.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { setIsUpdate } = todoSlice.actions;

export default todoSlice.reducer;
