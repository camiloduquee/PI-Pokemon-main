import style from "./FilterAttack.module.css";

const FilterAttack = ({nombre, isCheckedAttack, setIsCheckedAttack}) => {
  const handleCheckbox = (event)=> {
    if(event.target.checked){
      setIsCheckedAttack(true)
    }else{
      setIsCheckedAttack(false)
    }
  }
  return (
    <div>
      <span>{nombre}</span>

      <div className={style.container}>
        <div className={style.group}>
          <input
            id="ataque"
            type="checkbox"
            checked={isCheckedAttack}
            onChange={handleCheckbox}
          />
          <label htmlFor="ataque">Ataque</label>
        </div>
        
      </div>
    </div>
  )
}
export default FilterAttack;