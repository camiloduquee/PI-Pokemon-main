import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({firstIndex, lastIndex}) => {
  const { pokemonsAll } = useSelector((state) => state.allPokemons);
  
  return (
    <div className={style.container}>
      {pokemonsAll?.map((property) => {
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
            Types={property.Types}
          />
        );
      }).slice(firstIndex, lastIndex)}
    </div>
  );
};
export default CardsContainer;
