import React from 'react';
import { StoreContainer } from './store'
import './App.css';
import FormComponent from './form';
import TodoComponent from './todo';

const App = () => (
  <StoreContainer.Provider>
    <FormComponent />
    <TodoComponent />
  </StoreContainer.Provider>
)
export default App;
