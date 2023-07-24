import style from "./FilterType.module.css";
import { useSelector } from "react-redux";


const FilterType = ({ nombre, isCheckedType, setIsCheckedType }) => {
  const Tipos = useSelector((state) => state.allTypes);

  const handleCheckbox = (tipo) => {
    if (isCheckedType === tipo) {
      setIsCheckedType("");
    } else {
      setIsCheckedType(tipo);
    }
  };

  return (
    <div>
      <span>{nombre}</span>
      <div className={style.container}>
        <div className={style.group}>
          <input
            id="All"
            type="checkbox"
            checked={isCheckedType === "All"}
            onChange={() => handleCheckbox("All")}
          />
          <label htmlFor="All">All</label>
        </div>
        {Tipos.map((tipo, index) => {
          return (
            <div className={style.group} key={tipo.ID}>
              <input
                id={tipo.Nombre}
                type="checkbox"
                checked={isCheckedType === tipo.Nombre}
                onChange={() => handleCheckbox(tipo.Nombre)}
              />
              <label htmlFor={tipo.Nombre}>{tipo.Nombre}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterType;
