import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'

import App from '../App';
import MenuBurger from './MenuBurger';
import MenuModal from './MenuModal';

describe('Menu Modal Testing', () => {
  const initialState = {tasks: [{id: 1, name: 'test task', completed: false}]}
  const mockStore = configureStore()
  let store;

  it('render component', async () => {
    render(<MenuBurger></MenuBurger>);
    expect(await screen.findByLabelText('MenuBurgerButton')).toBeInTheDocument();
  })

  it('open modal after click on burger button', async () => {
    store = mockStore(initialState)
    render(<Provider store={store}><Router><App /></Router></Provider>)
    const burgerButton = await screen.findByLabelText('MenuBurgerButton');

    userEvent.click(burgerButton);

    expect(await screen.queryByLabelText('ModalMenu')).toBeInTheDocument();
  })

  it('open TodoApp page when click menu link', async () => {
    store = mockStore(initialState)
    render(<Provider store={store}><Router><App /></Router></Provider>)
    const burgerButton = await screen.findByLabelText('MenuBurgerButton');
    userEvent.click(burgerButton);

    const todoAppMenuLink = await screen.findByRole('link', {name: 'Todo App'});
    userEvent.click(todoAppMenuLink);
    expect(await screen.findByRole('heading', {name: 'Todo App'})).toBeInTheDocument();
  })

  it('open WeatherApp page when click menu link', async () => {
    store = mockStore(initialState)
    render(<Provider store={store}><Router><App /></Router></Provider>)
    const burgerButton = await screen.findByLabelText('MenuBurgerButton');
    userEvent.click(burgerButton);

    const weatherAppMenuLink = await screen.findByRole('link', {name: 'Weather App'});
    userEvent.click(weatherAppMenuLink);
    expect(await screen.findByRole('heading', {name: 'Weather App'})).toBeInTheDocument();
  })
})