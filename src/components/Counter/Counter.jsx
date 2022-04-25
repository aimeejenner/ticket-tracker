import React, { useState } from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterContainer}>
      <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter;

