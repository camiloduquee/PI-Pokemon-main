import React from 'react'
import style from "./Pokebola.module.css";

const Pokebola = ({children}) => {
  return (
    <div className={style.pokebola}>
		<div className={style.pokebolaDeg}>
            
        </div>
    {children}    
	</div>
  )
}

export default Pokebola;