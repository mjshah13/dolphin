import React from "react";
import styles from "./Loader.module.scss";
import Loader from "react-loader-spinner";

const Loading = ({ type }) => {
  return (
    <div className={styles.loader_container}>
      <Loader type="Oval" color="#1775f9" height={100} width={60} />
    </div>
  );
};

export default Loading;
