import { useSelector } from "react-redux";
import style from "./Pagination.module.css";
import backArrow from "../../assets/svg/backArrow.svg";
import forwardArrow from "../../assets/svg/forwardArrow.svg";
import addSvg from "../../assets/svg/add.svg";
import menosSvg from "../../assets/svg/menos.svg";

const Pagination = ({
  pokemonsPage,
  currentPage,
  setCurrentPage,
  active,
  next,
  previous,
  setCurrentLink,
  setIsLoading,
}) => {
  const pageNumbers = [];
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonsFilter = useSelector((state) => state.pokemonsFilter);

  if (allPokemons)
    for (
      let i = 1;
      i <=
      Math.ceil(
        (active ? pokemonsFilter?.length : allPokemons?.length) / pokemonsPage
      );
      i++
    ) {
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
        className={style.btn}
        onClick={() => {
          previous !== null && setCurrentLink(previous);
          setIsLoading(true);
        }}
        disabled={previous ? false : true}
        title="Back"

        
      >
        <img src={menosSvg} className={style.svg}  disabled={previous ? false : true}/>
      </button>
      <button
        disabled={currentPage === 1 ? true : false}
        className={style.btn}
        onClick={handleButtonPrev}
      >
        <img
          className={style.svg}
          src={backArrow}
          disabled={currentPage === 1 ? true : false}
        ></img>
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
        <img
          className={style.svg}
          src={forwardArrow}
          disabled={currentPage >= pageNumbers.length ? true : false}
        ></img>
      </button>
      <button
        className={style.btn}
        onClick={() => {
          next !== null && setCurrentLink(next);
          setIsLoading(true);
        }}
        disabled={next ? false : true}
        title="Next"
      >
        <img src={addSvg} className={style.svg}  disabled={next ? false : true}/>
      </button>
    </nav>
  );
};
export default Pagination;
