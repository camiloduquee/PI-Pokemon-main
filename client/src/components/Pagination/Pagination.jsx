import { useSelector } from "react-redux";
import style from "./Pagination.module.css";
import backArrow from "../../assets/svg/backArrow.svg";
import forwardArrow from "../../assets/svg/forwardArrow.svg";
import { useState } from "react";

const Pagination = ({ pokemonsPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  const allPokemons = useSelector((state) => state.allPokemons);
  if(allPokemons.results)

    for (let i = 1; i <= Math.ceil(allPokemons.results?.length / pokemonsPage); i++) {
      pageNumbers.push(i);
    }
 
  const handleButtonPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleButtonNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleButtonPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <nav className={style.pagination}>
      <button
        disabled={currentPage === 1 ? true : false}
        className={style.btn}
        onClick={handleButtonPrev}
      >
        <img src={backArrow}></img>
      </button>
      <ul className={style.ul}>
        {pageNumbers.map((Element, index) => (
          <li key={index}>
            <a
              className={`${style.li} ${
                Element === currentPage ? style.btnActive : ""
              }`}
              onClick={() => handleButtonPage(Element)}
            >
              {Element}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={style.btn}
        onClick={handleButtonNext}
        disabled={currentPage >= pageNumbers.length ? true : false}
      >
        <img src={forwardArrow}></img>
      </button>
    </nav>
  );
};
export default Pagination;
