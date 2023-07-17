import style from "./FilterOrder.module.css";

const FilterOrder = ({nombre}) => {
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        <div className={style.group}>
          <input
            type="checkbox"
            name="ascendente"
            id="ascendente"
            // onChange={handleCheckbox}
          />
          <label htmlFor="ascendente">Ascendente</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="descendente"
            id="descendente"
            // onChange={handleCheckbox}
          />
          <label htmlFor="descendente">Descendente</label>
        </div>
      </div>
    </div>
  )
}
export default FilterOrder;