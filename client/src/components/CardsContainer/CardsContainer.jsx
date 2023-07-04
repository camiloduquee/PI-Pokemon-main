import Card from "../Card/Card";
import style from "./Cards.module.css";

const pokemonsAll = [
    {
      "ID": "d7df5b4e-5384-48b0-92dc-0c17ee141303",
      "Nombre": "camilo",
      "Imagen": "www.asdasd.com",
      "Vida": 123,
      "Ataque": 152,
      "Defensa": 12,
      "Velocidad": 1123,
      "Altura": 100,
      "Peso": 200,
      "Types": [
        {
          "ID": 1,
          "Nombre": "normal"
        },
        {
          "ID": 3,
          "Nombre": "flying"
        }
      ]
    },
    {
      "ID": "e393a568-ea8c-4ef9-b365-11067eea7661",
      "Nombre": "camilod",
      "Imagen": "www.asdasd.com",
      "Vida": 13,
      "Ataque": 152,
      "Defensa": 12,
      "Velocidad": 123,
      "Altura": 100,
      "Peso": 2760,
      "Types": [
        {
          "ID": 1,
          "Nombre": "normal"
        },
        {
          "ID": 10,
          "Nombre": "fire"
        }
      ]
    },
    {
      "ID": "fc1151a3-8c34-4068-bacc-26b2b5293066",
      "Nombre": "maximiliano",
      "Imagen": "www.asdasd.com",
      "Vida": 13,
      "Ataque": 152,
      "Defensa": 12,
      "Velocidad": 123,
      "Altura": 100,
      "Peso": 2760,
      "Types": [
        {
          "ID": 5,
          "Nombre": "ground"
        },
        {
          "ID": 13,
          "Nombre": "electric"
        }
      ]
    },
    {
      "ID": 1,
      "Name": "bulbasaur",
      "Imagen": {
        "svg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "animacion": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
        "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      },
      "Vida": 45,
      "Ataque": 49,
      "Defensa": 49,
      "Velocidad": 45,
      "Altura": 7,
      "Peso": 69,
      "tipo": [
        "grass",
        "poison"
      ]
    },
    {
      "ID": 2,
      "Name": "ivysaur",
      "Imagen": {
        "svg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "animacion": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
        "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      },
      "Vida": 60,
      "Ataque": 62,
      "Defensa": 63,
      "Velocidad": 60,
      "Altura": 10,
      "Peso": 130,
      "tipo": [
        "grass",
        "poison"
      ]
    }
  ];

const CardsContainer = () => {

  return (
    <div className={style.container}>
      {pokemonsAll.map((property) => {
        return (
          <Card
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
      })}
    </div>
  );
};
export default CardsContainer;
