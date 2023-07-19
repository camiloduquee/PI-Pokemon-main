import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ firstIndex, lastIndex, active }) => {
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonsFilter = useSelector((state) => state.pokemonsFilter);
  return (
    <div className={style.containerCards}>
      
      {(active ? pokemonsFilter:allPokemons)
        ?.map((property) => {
          return (
            <Card
              key={property.ID}
              ID={property.ID}
              Nombre={property.Nombre}
              Imagen={property.Imagen}
              Vida={property.Vida}
              Ataque={property.Ataque}
              Defensa={property.Defensa}
              Velocidad={property.Velocidad}
              Altura={property.Altura}
              Peso={property.Peso}
              Tipos={property.Types}
            />
          );
        })
        .slice(firstIndex, lastIndex)}
    </div>
  );
};
export default CardsContainer;
