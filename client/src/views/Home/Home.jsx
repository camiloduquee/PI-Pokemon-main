import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allPokemons } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [pokemonsPage, setPokemonsPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataUrl, setDataUrl] = useState(
    "http://localhost:3001/pokemons"
  );

  const lastIndex = currentPage * pokemonsPage;
  const firstIndex = lastIndex - pokemonsPage;

  
  useEffect(() => {

    dispatch(allPokemons(dataUrl));
    
  }, []);

  return (
    <div>
      <div>
        <h1>Esta es la vista de Home</h1>
        <CardsContainer lastIndex={lastIndex} firstIndex={firstIndex} />
      </div>
      <div>
        <Pagination
          pokemonsPage={pokemonsPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          
        />
      </div>
    </div>
  );
};
export default Home;
