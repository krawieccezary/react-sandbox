import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { TaskProps } from '../components/TodoApp/Task';

export interface TodoState {
  tasks: Array<TaskProps>
}

const initialState:TodoState = {
  tasks: []
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTask: (state, action: PayloadAction<TaskProps>) => {
      state.tasks.unshift(action.payload)
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    checkTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      state.tasks[index].completed = !state.tasks[index].completed;
    },
    editTask: (state, action: PayloadAction<TaskProps>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      state.tasks[index].name = action.payload.name;
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
  },
})

export const { addTask, removeTask, checkTask, editTask, removeAllTasks } = todoSlice.actions;

export const tasks = (state: RootState) => state.tasks;

export default todoSlice.reducer;