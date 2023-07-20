import { useNavigate } from "react-router-dom";
import ImageComp from "../../helpers/ImageComp";
import TypesName from "../TypesName/TypesName";
import { Loader } from "../Loader/Loader";
const DetailCard = ({ character }) => {
  const navigate = useNavigate();
  const backToTheHome = () => {
    navigate("/home");
  };
  return (
    <>
      {!character.Nombre ? (
        <Loader />
      ) : (
        <div>
          <h1>{character.Nombre}</h1>
          <ImageComp imageUrl={character.Imagen} />
          <h3>{character.ID}</h3>
          <h3>{character.Vida}</h3>
          <h3>{character.Ataque}</h3>
          <h3>{character.Defensa}</h3>
          {character.Velocidad ? <h3>{character.Velocidad}</h3> : ""}
          {character.Altura ? <h4>{character.Altura}</h4> : ""}
          {character.Peso ? <h4>{character.Peso}</h4> : ""}
          <TypesName Tipos={character.Types} />
          <button onClick={backToTheHome}>Home</button>
        </div>
      )}
    </>
  );
};

export default DetailCard;
