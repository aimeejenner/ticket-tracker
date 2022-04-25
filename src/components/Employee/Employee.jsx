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
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.role}>{role}</h2>
        <Counter />
    </div>
  )
}

export default Employee;