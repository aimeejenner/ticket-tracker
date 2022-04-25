import styles from './App.module.scss';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Employee from './components/Employee/Employee';
import employees from "./data/employees";

const App = () => {
  const getEmployeeJsx = (employee) => (
    <Employee />
  )

  return (
      <Employee employee={employees[1]} />
  );
}

export default App;
