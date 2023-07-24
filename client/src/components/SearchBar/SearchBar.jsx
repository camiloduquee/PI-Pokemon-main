import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
// ---------- SVG ----------------
import svgSearch from "../../assets/svg/search.svg";
import getName from "./getName";
import boxArrow from "../../assets/svg/boxArrow.svg";
// Componentes
import Error from "../Error/Error";
import Message from "../Message/Message";

const SearchBar = () => {
  const navigation = useNavigate();
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
  const handleDetail = () => {
    navigation(`/detail/${searchPokemon.ID}`)
  }
  return (
    <>
      <div className={style.inputWrapper}>
        <input
          className={style.input}
          type="search"
          placeholder="Enter an ID or Name"
          onChange={handleChange}
          value={searchInput}
        />
        <button className={style.inputIcon} onClick={handleOnClick}>
          <img className={style.img} src={svgSearch} alt="Buscar" />
        </button>
      </div>
      {searchPokemon.Error && <Error menssage={searchPokemon.Error} />}
      {searchPokemon.Nombre && (
        <Message menssage="A match was found">
          <button className={style.inputIcon} onClick={handleDetail}>
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
