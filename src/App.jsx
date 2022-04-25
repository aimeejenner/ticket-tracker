import styles from './App.module.scss';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Employee from './components/Employee/Employee';
import employees from "./data/employees";

const App = () => {
  const getEmployeeJsx = (employee) => (
    <div className={styles.employeeContainer} key={employee.id}>
      <Employee employee={employee} />
    </div>
  )

  return (
    <div className={styles.content}>{employees.map(getEmployeeJsx)}</div>
  );
}

export default App;
