/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import styles from "./Dedication.module.css";
import VinhDanhImg from "../../assets/images/vinhdanh.jpg";

const Dedication = () => {
  return (
    <div className={styles.dedication}>
      <div className={styles.header}>
        <h3>Vinh danh</h3>
      </div>
      <div className={styles.body}>
        <img src={VinhDanhImg} alt="image" />
        {/* <h3></h3> */}
      </div>
    </div>
  );
};

export default Dedication;
