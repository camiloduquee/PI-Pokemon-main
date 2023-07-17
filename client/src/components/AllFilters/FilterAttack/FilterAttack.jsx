import style from "./FilterAttack.module.css";

const FilterAttack = ({nombre}) => {
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        <div className={style.group}>
          <input
            type="checkbox"
            name="ataque"
            id="ataque"
            // onChange={handleCheckbox}
          />
          <label htmlFor="ataque">Ataque</label>
        </div>
        
      </div>
    </div>
  )
}
export default FilterAttack;