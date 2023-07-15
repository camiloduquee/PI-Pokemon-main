import React, { Children } from "react";
import style from "./Message.module.css";

const Message = ({children, menssage}) => {
  return (
    <div className={style.menssage}>
      <h4>{menssage}</h4>
      {children}
    </div>
  );
};
export default Message;