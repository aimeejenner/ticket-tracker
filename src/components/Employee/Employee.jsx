import React from 'react';
import styles from "./Employee.module.scss";
import Counter from '../Counter/Counter';


const Employee = (props) => {
    const {
        name,
        role,
      } = props.employee;

  return (
    <div className={styles.employeeContainer}>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <Counter />
    </div>
  )
}

export default Employee;