import { useState } from "react";
import style from "./FilterType.module.css";

const FilterType = ({ nombre }) => {
  const handleCheckbox = (event) => {};
  return (
    <div>
      <span>{nombre}</span>
      <div className={style.container}>
        <div className={style.group}>
          <input
            type="checkbox"
            name="normal"
            id="normal"
            onChange={handleCheckbox}
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="fighting"
            id="fighting"
            onChange={handleCheckbox}
          />
          <label htmlFor="fighting">Lucha</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="flying"
            id="flying"
            onChange={handleCheckbox}
          />
          <label htmlFor="flying">Volar</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="poison"
            id="poison"
            onChange={handleCheckbox}
          />
          <label htmlFor="poison">Veneno</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="ground"
            id="ground"
            onChange={handleCheckbox}
          />
          <label htmlFor="ground">Suelo</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="rock"
            id="rock"
            onChange={handleCheckbox}
          />
          <label htmlFor="rock">Roca</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="bug"
            id="bug"
            onChange={handleCheckbox}
          />
          <label htmlFor="bug">Bicho</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="ghost"
            id="ghost"
            onChange={handleCheckbox}
          />
          <label htmlFor="ghost">Fantasma</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="steel"
            id="steel"
            onChange={handleCheckbox}
          />
          <label htmlFor="steel">Acero</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="fire"
            id="fire"
            onChange={handleCheckbox}
          />
          <label htmlFor="fire">Fuego</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="water"
            id="water"
            onChange={handleCheckbox}
          />
          <label htmlFor="water">Agua</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="grass"
            id="grass"
            onChange={handleCheckbox}
          />
          <label htmlFor="grass">Hierba</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="electric"
            id="electric"
            onChange={handleCheckbox}
          />
          <label htmlFor="electric">Eléctrico</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="psychic"
            id="psychic"
            onChange={handleCheckbox}
          />
          <label htmlFor="psychic">Psíquico</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="ice"
            id="ice"
            onChange={handleCheckbox}
          />
          <label htmlFor="ice">Hielo</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="dragon"
            id="dragon"
            onChange={handleCheckbox}
          />
          <label htmlFor="dragon">Dragón</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="dark"
            id="dark"
            onChange={handleCheckbox}
          />
          <label htmlFor="dark">Oscuro</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="fairy"
            id="fairy"
            onChange={handleCheckbox}
          />
          <label htmlFor="fairy">Hada</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="unknown"
            id="unknown"
            onChange={handleCheckbox}
          />
          <label htmlFor="unknown">Desconocido</label>
        </div>
        <div className={style.group}>
          <input
            type="checkbox"
            name="shadow"
            id="shadow"
            onChange={handleCheckbox}
          />
          <label htmlFor="shadow">Sombra</label>
        </div>
      </div>
    </div>
  );
};

export default FilterType;
