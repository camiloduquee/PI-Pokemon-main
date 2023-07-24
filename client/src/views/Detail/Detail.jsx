import axios from "axios";
import DetailCard from "../../components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { endpoint } from "../../helpers/variables";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { ID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(`${endpoint}/pokemons/${ID}`);
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
