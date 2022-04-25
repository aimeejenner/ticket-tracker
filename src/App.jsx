import styles from './App.module.scss';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Employee from './components/Employee/Employee';

const App = () => {
  return (
    <Employee />,
    <Counter />
  );
}

export default App;
