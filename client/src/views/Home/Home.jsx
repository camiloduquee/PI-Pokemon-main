import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPokemons, allTypes } from "../../redux/actions";
import  Loader  from "../../components/Loader/Loader";
import style from "./Home.module.css";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.allPokemons);
  
  
  
  const [pokemonsPage, setPokemonsPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * pokemonsPage;
  const firstIndex = lastIndex - pokemonsPage;
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(allPokemons("http://localhost:3001/pokemons"));
    dispatch(allTypes("http://localhost:3001/types"));      
  }, []);

  // useEffect(() => {
  //   dispatch(allPokemons("http://localhost:3001/pokemons?offset=100000&limit=0"));
        
  // }, []);

  return (
    <>
      <div className={style.containerHome}>
        <div className={style.containerTop}>
          <SearchBar />
        </div>
        {!pokemons.length && <Loader />}
        <div className={style.fondo}>
          <Filter active={active} setActive={setActive} />
          
          <CardsContainer
            lastIndex={lastIndex}
            firstIndex={firstIndex}
            active={active}
          />
          <div className={style.containerPage}>
            <Pagination
              pokemonsPage={pokemonsPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              active={active}
            />
          </div>

          
         
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Home;