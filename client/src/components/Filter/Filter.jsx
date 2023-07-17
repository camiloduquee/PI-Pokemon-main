import {
  FilterAlphabet,
  FilterAttack,
  FilterOrder,
  FilterOrigin,
  FilterType,
} from "../AllFilters/index";

import React, { useState } from "react";
import style from "./Filter.module.css";
import filterLeft from "../../assets/svg/filterLeft.svg";
const Filter = () => {
  const [active, setActive] = useState(false);
  const handleActiveFiltre = () => {
    setActive(true);
  };
  return (
    <>
      <div className={style.boxBtn}>
        <button className={style.btn} onClick={handleActiveFiltre}>
          <img src={filterLeft} alt="Filtro" />
        </button>
        <span>Filtrar</span>
      </div>
      <div className={`${style.containerFilter} ${active ? style.active : ""}`}>
        <div className={style.filterTipo}>
          <div className={style.btnfilterClose}>
            <button className={style.btnClose} onClick={() => setActive(false)}>
              <img src={filterLeft} alt="Filtro" />
            </button>
            <h5>Cerrar</h5>
          </div>
          <FilterType nombre="Tipo" />
          <FilterOrigin nombre="Origen" />
          <FilterOrder nombre="Orden " />
          <FilterAlphabet nombre="Orden Alfabético" />
          <FilterAttack nombre="Orden Ataque" />
        </div>
      </div>
    </>
  );
};
export default Filter;
