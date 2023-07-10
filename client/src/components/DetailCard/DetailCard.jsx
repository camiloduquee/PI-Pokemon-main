import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageComp from "../../helpers/ImageComp";
import TypesName from "../Types/Types";

const DetailCard = ({ character }) => {
  const navigate = useNavigate();
  const backToTheHome = () => {
    navigate("/home");
  };

return (
    <>
      <h1>Estoy en el detalle de la carta </h1>
     
      {!character.Nombre ? (
        <div>cargando informacion</div>
      ) : (
        <div>
          <h1>{character.Nombre}</h1>
          <ImageComp imageUrl={character.Imagen}/>
          <h3>{character.Vida}</h3>
          <h3>{character.Ataque}</h3>
          <h3>{character.Defensa}</h3>
          <h3>{character.Velovidad}</h3>
          {character.Altura ? <h4>{character.Altura}</h4> : ""}
          {character.Peso ? <h4>{character.Peso}</h4> : ""}
          <TypesName Tipos={character.Types}/>
        </div>
      )}
      <button onClick={backToTheHome}>Home</button>
    </>
  );
};

export default DetailCard;
