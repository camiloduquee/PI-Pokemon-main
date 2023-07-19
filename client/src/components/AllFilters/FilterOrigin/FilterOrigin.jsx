import style from "./FilterOrigin.module.css";

const FilterOrigin = ({ nombre, isCheckedOrigin, setIsCheckedOrigin }) => {
  const handleCheckbox = (checkboxName) => {
    setIsCheckedOrigin(checkboxName);
  };

  return (
    <div>
      <span>{nombre}</span>
      <div className={style.container}>
        {["API", "BD"].map((value) => {
          return (
            <div key={value} className={style.group}>
              <input
                id={value}
                type="checkbox"
                checked={isCheckedOrigin === value}
                onChange={() => handleCheckbox(value)}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterOrigin;
