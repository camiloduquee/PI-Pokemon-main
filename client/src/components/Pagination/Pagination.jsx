import { useSelector } from "react-redux";
import style from "./Pagination.module.css";
import backArrow from "../../assets/svg/backArrow.svg";
import forwardArrow from "../../assets/svg/forwardArrow.svg";

const Pagination = ({ pokemonsPage, currentPage, setCurrentPage }) => {
  const { pokemonsAll } = useSelector((state) => state.allPokemons);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokemonsAll?.length / pokemonsPage); i++) {
    pageNumbers.push(i);
  }
  const handleButtonPrev = () => {
    setCurrentPage(currentPage - 1);
  }
  const handleButtonNext = () => {
    setCurrentPage(currentPage + 1);
  }
  const handleButtonPage = (n) => {
    setCurrentPage(n);
  }
  return (
    <nav className={style.pagination}>
      <button disabled={currentPage === 1 ? true : false} className={style.btn} onClick={handleButtonPrev}>
        <img src={backArrow}></img>
      </button>
      <ul className={style.ul}>
        {pageNumbers.map((Element, index) => (
          <li key={index}>
            <a className={`${style.li} ${Element === currentPage ? style.btnActive : ''}`} onClick={() => handleButtonPage(Element)}>{Element}</a>
          </li>
        ))}
      </ul>
      <button disabled={currentPage >= pageNumbers.length ? true : false} className={style.btn} onClick={handleButtonNext}>
        <img src={forwardArrow}></img>
      </button>
    </nav>
  );
};
export default Pagination;
