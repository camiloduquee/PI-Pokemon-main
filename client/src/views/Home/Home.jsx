import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { allPokemons, allTypes } from "../../redux/actions";
import Loader from "../../components/Loader/Loader";
import style from "./Home.module.css";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { endpoint } from "../../helpers/variables";
const Home = () => {
  const dispatch = useDispatch();

  // ---------------- paginado ----------

  const [next, setNext] = useState(null);
  const [previous, setPrevius] = useState(null);
  const [currentLink, setCurrentLink] = useState(`${endpoint}/pokemons?offset=0&limit=60`);
  
  // -------------------
  const [pokemonsPage, setPokemonsPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * pokemonsPage;
  const firstIndex = lastIndex - pokemonsPage;
  const [active, setActive] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function url() {
      const { data } = await axios(currentLink);
      setNext(data.next);
      setPrevius(data.previous);
      setIsLoading(false);
    }
    url();
    dispatch(allPokemons(currentLink));
    dispatch(allTypes(`${endpoint}/types`));
  }, [currentLink]);

  return (
    <>
      <div className={style.containerHome}>
        <div className={style.containerTop}>
          <SearchBar />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
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
                next={next}
                previous={previous}
                setCurrentLink={setCurrentLink}
                setIsLoading={setIsLoading}
              />
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};
export default Home;
