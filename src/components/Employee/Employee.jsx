import React from 'react';
import styles from "./Employee.module.scss";
import Counter from '../Counter/Counter';


const Employee = () => {
  return (
    <div className={styles.employeeContainer}>
        <h1>Employee name</h1>
        <Counter />
    </div>
  )
}

export default Employee;