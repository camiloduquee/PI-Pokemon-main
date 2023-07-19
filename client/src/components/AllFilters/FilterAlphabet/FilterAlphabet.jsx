import style from "./FilterAlphabet.module.css";

const FilterAlphabet = ({nombre, isCheckedAlfa, setIsCheckedAlfa}) => {
  const handleCheckbox = (event)=> {
    if(event.target.checked){
      setIsCheckedAlfa(true)
    }else{
      setIsCheckedAlfa(false)
    }
  }
  return (
    <div>
      <span>{nombre}</span>
      <div className={style.container}>
        <div className={style.group}>
          <input
            id="Abc"
            type="checkbox"
            checked={isCheckedAlfa}
            onChange={handleCheckbox}
          />
          <label htmlFor="abc">Abc</label>
        </div>
        
      </div>
    </div>
  )
}
export default FilterAlphabet;