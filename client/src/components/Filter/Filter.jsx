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
        <button className={style.btnTwo} onClick={handleActiveFiltre}>
        <div className={style.filterB}>Filter</div>
        </button>
        
      </div>
      <div className={`${style.containerFilter} ${active ? style.active : ""}`}>
        <div className={style.filterTipo}>
          <div className={style.btnfilterClose}>
            <button className={style.btnClose} onClick={() => setActive(false)}>
            <div>Close</div>
            </button>
           
          </div>
          <FilterType
            nombre="Type"
            isCheckedType={isCheckedType}
            setIsCheckedType={setIsCheckedType}
          />
          <FilterOrigin
            nombre="Origin"
            isCheckedOrigin={isCheckedOrigin}
            setIsCheckedOrigin={setIsCheckedOrigin}
          />
          <FilterOrder
            nombre="Order"
            isCheckedOrden={isCheckedOrden}
            setIsCheckedOrden={setIsCheckedOrden}
          />
          <FilterAlphabet
            nombre="Alphabetical Order"
            isCheckedAlfa={isCheckedAlfa}
            setIsCheckedAlfa={setIsCheckedAlfa}
          />
          <FilterAttack
            nombre="Attack"
            isCheckedAttack={isCheckedAttack}
            setIsCheckedAttack={setIsCheckedAttack}
          />
        </div>
      </div>
    </>
  );
};
export default Filter;
