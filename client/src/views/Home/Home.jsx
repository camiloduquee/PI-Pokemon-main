import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allPokemons, allTypes } from "../../redux/actions";
import { Loader } from "../../components/Loader/Loader";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const [pokemonsPage, setPokemonsPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const lastIndex = currentPage * pokemonsPage;
  const firstIndex = lastIndex - pokemonsPage;

  useEffect(() => {
    dispatch(allPokemons("http://localhost:3001/pokemons?offset=0&limit=120"));
    dispatch(allTypes("http://localhost:3001/types"));
  }, []);

  return (
    <>
      <div className={style.containerSearchBar}>
        <SearchBar />
      </div>
      <div>
        {loader && <Loader />}
        <h1>Esta es la vista de Home</h1>
        <CardsContainer lastIndex={lastIndex} firstIndex={firstIndex} />
      </div>
      <div className={style.containerPage}>
        <Pagination
          pokemonsPage={pokemonsPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
export default Home;
