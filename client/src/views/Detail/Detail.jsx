import axios from "axios";
import DetailCard from "../../components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { ID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(`http://localhost:3001/pokemons/${ID}`);
      return setCharacter(data);
    };
    fetchData();

    return setCharacter({});
  }, [ID]);
 
  return (
    <>
      <DetailCard character={character} />
    </>
  );
};
export default Detail;
