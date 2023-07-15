import React from "react";
import style from "./Error.module.css";

const Error = ({menssage}) => {
  return (
    <div className={style.menssageError}>
      <p>{menssage}</p>
    </div>
  );
};
export default Error;