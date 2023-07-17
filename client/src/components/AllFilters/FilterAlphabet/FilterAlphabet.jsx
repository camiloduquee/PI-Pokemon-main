import style from "./FilterAlphabet.module.css";

const FilterAlphabet = ({nombre}) => {
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        <div className={style.group}>
          <input
            type="checkbox"
            name="abc"
            id="abc"
            // onChange={handleCheckbox}
          />
          <label htmlFor="abc">Abc</label>
        </div>
        
      </div>
    </div>
  )
}
export default FilterAlphabet;