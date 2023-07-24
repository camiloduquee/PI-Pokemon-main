import style from "./FilterOrder.module.css";

const FilterOrder = ({ nombre, isCheckedOrden, setIsCheckedOrden }) => {
  const handleCheckbox = (checkboxName) => {
    setIsCheckedOrden(checkboxName);
  }
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        {["Ascendant", "Descending"].map((value) => {
          return (
            <div key={value} className={style.group}>
              <input
                id={value}
                type="checkbox"
                checked={isCheckedOrden === value}
                onChange={()=> handleCheckbox(value)}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterOrder;
