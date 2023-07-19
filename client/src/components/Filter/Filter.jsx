import {
  FilterAlphabet,
  FilterAttack,
  FilterOrder,
  FilterOrigin,
  FilterType,
} from "../AllFilters/index";
import {
  filterType,
  filterOrigen,
  filterOrden,
  filterAlfa,
  filterAttack,
} from "../../redux/actions";

import React, { useState, useEffect } from "react";
import style from "./Filter.module.css";
import filterLeft from "../../assets/svg/filterLeft.svg";
import { useDispatch } from "react-redux";

const Filter = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const [isCheckedType, setIsCheckedType] = useState("All");
  const [isCheckedOrigin, setIsCheckedOrigin] = useState("API");
  const [isCheckedOrden, setIsCheckedOrden] = useState("Ascendente");
  const [isCheckedAlfa, setIsCheckedAlfa] = useState(false);
  const [isCheckedAttack, setIsCheckedAttack] = useState(false);

  useEffect(() => {
    dispatch(filterType(isCheckedType));
    dispatch(filterOrigen(isCheckedOrigin));
    dispatch(filterOrden(isCheckedOrden));
    dispatch(filterAlfa(isCheckedAlfa));
    dispatch(filterAttack(isCheckedAttack));
  }, [
    isCheckedType,
    isCheckedOrigin,
    isCheckedOrden,
    isCheckedAlfa,
    isCheckedAttack
  ]);

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
          <FilterType
            nombre="Tipo"
            isCheckedType={isCheckedType}
            setIsCheckedType={setIsCheckedType}
          />
          <FilterOrigin
            nombre="Origen"
            isCheckedOrigin={isCheckedOrigin}
            setIsCheckedOrigin={setIsCheckedOrigin}
          />
          <FilterOrder
            nombre="Orden "
            isCheckedOrden={isCheckedOrden}
            setIsCheckedOrden={setIsCheckedOrden}
          />
          <FilterAlphabet
            nombre="Orden Alfabético"
            isCheckedAlfa={isCheckedAlfa}
            setIsCheckedAlfa={setIsCheckedAlfa}
          />
          <FilterAttack
            nombre="Orden Ataque"
            isCheckedAttack={isCheckedAttack}
            setIsCheckedAttack={setIsCheckedAttack}
          />
        </div>
      </div>
    </>
  );
};
export default Filter;
