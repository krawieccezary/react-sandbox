import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from './TodoApp';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import todoReducer, { addTask, removeAllTasks, editTask, removeTask, checkTask } from '../slices/todoSlices';

describe('Todo App Testing', () => {
  const initialState = {tasks: [{id: 1, name: 'test task', completed: false}]}
  const mockStore = configureStore()
  let store;

  it('renders component', () => {
    store = mockStore(initialState)
    render(<Provider store={store}><TodoApp /></Provider>)

    expect(screen.getByText('Todo App')).toBeInTheDocument()
  })

  it('return initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({tasks: []});
  })

  it('add task to empty tasks list', () => {
    const previousState = {tasks: []};
    const task = { id: 1, name: 'Test task', completed: false }

    expect(todoReducer(previousState, addTask(task))).toEqual({tasks: [task]});
  })

  it('add task to not empty list', () => {
    const previousState = {tasks: [
      { id: 1, name: 'first task', completed: true }
    ]};

    const newTask = { id: 2, name: 'second taks', completed: false}

    expect(todoReducer(previousState, addTask(newTask))).toEqual({tasks: [newTask, ...previousState.tasks]})
  })

  it('remove all tasks', () => {
    const previousState = {tasks: [
      { id: 1, name: 'first task', completed: true },
      { id: 2, name: 'second task', completed: true }
    ]};

    expect(todoReducer(previousState, removeAllTasks())).toEqual({tasks: []});
  })

  it('edit task', () => {
    const previousState = {tasks: [
      { id: 1, name: 'first task', completed: true },
      { id: 2, name: 'second task', completed: true }
    ]};

    expect(todoReducer(previousState, editTask({id: 2, name: 'edited task'}))).toEqual({tasks: [
      { id: 1, name: 'first task', completed: true },
      { id: 2, name: 'edited task', completed: true }
    ]})
  })

  it('remove task', () => {
    const previousState = {tasks: [
      { id: 1, name: 'first task', completed: true },
      { id: 2, name: 'second task', completed: true }
    ]};

    expect(todoReducer(previousState, removeTask(1))).toEqual({tasks: [
      { id: 2, name: 'second task', completed: true }
    ]})
  })

  it('check task', () => {
    const previousState = {tasks: [
      { id: 1, name: 'first task', completed: true },
      { id: 2, name: 'second task', completed: true }
    ]};

    expect(todoReducer(previousState, checkTask(1))).toEqual({tasks: [
      { id: 1, name: 'first task', completed: false },
      { id: 2, name: 'second task', completed: true }
    ]})
  })

  it('clear new task input after add task', () => {
    store = mockStore(initialState)
    render(<Provider store={store}><TodoApp /></Provider>)
    const input = screen.getByRole('textbox');
    
    userEvent.type(input, 'JavaScript');

    fireEvent(screen.getByText('Add task'), 
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(input.value).toEqual('');
  })
})