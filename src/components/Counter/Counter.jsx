import React, { useState } from 'react';
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterContainer}>
      <div><h3>Counter</h3></div>
      <div><h1>{count}</h1></div>
      <div>
        <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
        <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter;

