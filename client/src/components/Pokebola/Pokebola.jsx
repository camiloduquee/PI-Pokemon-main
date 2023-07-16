import React from 'react'
import style from "./Pokebola.module.css";

const Pokebola = ({number}) => {
  return (
    <div className={style.pokebola}>
		<div className={style.pokebolaDeg}>
            <div className={style.number}>{number}</div>
        </div>
        
	</div>
  )
}

export default Pokebola;