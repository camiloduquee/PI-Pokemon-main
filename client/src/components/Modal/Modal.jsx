import React from "react";
import style from "./Modal.module.css";

const Modal = ({ children, state, changeStatus, setPokemonData, pokemonData,titulo }) => {
  return (
    <>
      {state && (
        <div className={style.overlay}>
          <div className={style.container}>
            <div className={style.title}>
              {titulo}
            </div>
            <button
              className={style.button}
              onClick={() => {
                setPokemonData({
                  ...pokemonData,
                  Tipo:[],
                });
                changeStatus(false);
                
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
