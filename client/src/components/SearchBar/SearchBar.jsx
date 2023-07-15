import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";
// ---------- SVG ----------------
import svgSearch from "../../assets/svg/search.svg";
import getName from "./getName";
import boxArrow from "../../assets/svg/boxArrow.svg";
// Componentes
import Error from "../Error/Error";
import Message from "../Message/Message";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchPokemon, setSearchPokemon] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);

    if (searchInput.length === 0) {
      setSearchPokemon({});
    }
  };
  const handleOnClick = async () => {
    const data = await getName(searchInput);
    setSearchPokemon(data);
  };

  return (
    <>
      <div className={style.inputWrapper}>
        <input
          className={style.input}
          type="search"
          placeholder="Ingresa un ID o Nombre"
          onChange={handleChange}
          value={searchInput}
        />
        <button className={style.inputIcon} onClick={handleOnClick}>
          <img className={style.img} src={svgSearch} alt="Buscar" />
        </button>
      </div>
      {searchPokemon.Error && <Error menssage={searchPokemon.Error} />}
      {searchPokemon.Nombre && (
        <Message menssage="Se encontro una coincidencia">
          <button className={style.inputIcon}>
            <img
              className={style.img}
              src={boxArrow}
              alt={searchPokemon.Nombre}
            ></img>
          </button>
        </Message>
      )}
    </>
  );
};

export default SearchBar;
