import style from "./FilterOrigin.module.css";

const FilterOrigin = ({ nombre }) => {
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        <div className={style.group}>
          <input
            type="checkbox"
            name="API"
            id="API"
            // onChange={handleCheckbox}
          />
          <label htmlFor="API">API</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="BD"
            id="BD"
            // onChange={handleCheckbox}
          />
          <label htmlFor="BD">BD</label>
        </div>
      </div>
      
       
      
    </div>
  );
};
export default FilterOrigin;
