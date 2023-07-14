import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import style from "../Form/F.module.css";
import validation from "./validation";
import postForm from "./postForm";

const Form = () => {
  const Tipos = useSelector((state) => state.allTypes);
  // -------------  Estados ----------
  const [estadoModal, setEstadoModal] = useState(false);
  const [stateMenss, setStateMenss] = useState(false);
  const [menssage, setMenssage] = useState({
    Nombre: "",
    Error: "",
  });
  const [pokemonData, setPokemonData] = useState({
    Nombre: "",
    Imagen: "",
    Vida: 0,
    Ataque: 0,
    Defensa: 0,
    Velocidad: 0,
    Altura: 0,
    Peso: 0,
    Tipo: [],
  });
  const [errors, setErrors] = useState({
    Nombre: "",
    Imagen: "",
    Vida: 0,
    Ataque: 0,
    Defensa: 0,
    Velocidad: 0,
    Altura: 0,
    Peso: 0,
    Tipo: [],
  });

  // ----------- Funciones ---------

  const handleInputChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if (
      ["Vida", "Ataque", "Defensa", "Velocidad", "Altura", "Peso"].includes(
        property
      )
    ) {
      value = Number(value);
 
    }

    setPokemonData({
      ...pokemonData,
      [property]: value,
    });
    setErrors(
      validation({
        ...pokemonData,
        [property]: value,
      })
    );
  };
  function handleChange(event) {
    const checked = event.target.checked;
    const value = Number(event.target.value);
    const property = event.target.name;

    if (checked) {
      setPokemonData({
        ...pokemonData,
        [property]: [...pokemonData.Tipo, value],
      });
      setErrors(
        validation({
          ...pokemonData,
          [property]: [...pokemonData.Tipo, value],
        })
      );
    } else {
      setPokemonData({
        ...pokemonData,
        [property]: [...pokemonData.Tipo].filter((item) => item !== value),
      });
      setErrors(
        validation({
          ...pokemonData,
          [property]: [...pokemonData.Tipo].filter((item) => item !== value),
        })
      );
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
      setStateMenss(true);
      const data = await postForm(pokemonData);
      setMenssage({
        Nombre: data.Nombre,
        Error: data.Error,
      });
      setPokemonData({
        Nombre: "",
        Imagen: "",
        Vida: 0,
        Ataque: 0,
        Defensa: 0,
        Velocidad: 0,
        Altura: 0,
        Peso: 0,
        Tipo: [],
      });
      setErrors({
        Nombre: "",
        Imagen: "",
        Vida: 0,
        Ataque: 0,
        Defensa: 0,
        Velocidad: 0,
        Altura: 0,
        Peso: 0,
        Tipo: [],
      });
    } else {
      const data = {
        Error: "Debes corregir los errores",
      };
      setStateMenss(true);
      setMenssage({
        Nombre: data.Nombre,
        Error: data.Error,
      });
    }
  };

  const handleAddTypes = () => {
    if (!errors.Tipo) {
      setEstadoModal(false);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>Crear Pokemón</div>
        <div>
          <label htmlFor="NombreForm">Nombre</label>
          <input
            id="NombreForm"
            type="text"
            placeholder="Nombre del Pokemón"
            name="Nombre"
            value={pokemonData.Nombre}
            onChange={handleInputChange}
          />

          <label htmlFor="ImagenForm">Imagen</label>
          <input
            id="ImagenForm"
            type="text"
            placeholder="Pokemón imagen..."
            name="Imagen"
            value={pokemonData.Imagen}
            onChange={handleInputChange}
          />
          <div>
            <label htmlFor="VidaForm">Vida</label>
            <input
              id="VidaForm"
              type="range"
              min={0}
              max={100}
              name="Vida"
              value={pokemonData.Vida}
              onChange={handleInputChange}
            />

            <label htmlFor="AtaqueForm">Ataque</label>
            <input
              id="AtaqueForm"
              type="range"
              min={0}
              max={100}
              name="Ataque"
              value={pokemonData.Ataque}
              onChange={handleInputChange}
            />

            <label htmlFor="DefensaForm">Defensa</label>
            <input
              id="DefensaForm"
              type="range"
              min={0}
              max={100}
              name="Defensa"
              value={pokemonData.Defensa}
              onChange={handleInputChange}
            />

            <label htmlFor="VelocidadForm">Velocidad</label>
            <input
              id="VelocidadForm"
              type="range"
              min={0}
              max={100}
              name="Velocidad"
              value={pokemonData.Velocidad}
              onChange={handleInputChange}
            />

            <label htmlFor="AlturaForm">Altura</label>
            <input
              id="AlturaForm"
              type="range"
              min={0}
              max={100}
              name="Altura"
              value={pokemonData.Altura}
              onChange={handleInputChange}
            />

            <label htmlFor="PesoForm">Peso</label>
            <input
              id="PesoForm"
              type="range"
              min={0}
              max={1000}
              name="Peso"
              value={pokemonData.Peso}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.containertipos}>
          <button
            type="button"
            onClick={() => {
              setEstadoModal(!estadoModal);
              setPokemonData({
                ...pokemonData,
                Tipo: [],
              });
            }}
          >
            Tipo de pokemón
          </button>

          {!estadoModal && (
            <div className={style.containertipos}>
              {Tipos.map((Element) => {
                const result = pokemonData.Tipo.includes(Element.ID);
                return (
                  result && (
                    <div key={Element.ID} className={style.containerBox}>
                      {Element.Nombre}
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
        <Modal
          state={estadoModal}
          changeStatus={setEstadoModal}
          setPokemonData={setPokemonData}
          pokemonData={pokemonData}
          titulo="Tipos de pokemón"
        >
          <div className={style.contenido}>
            {Tipos.map((tipo) => {
              return (
                <div key={tipo.ID}>
                  <input
                    name="Tipo"
                    value={tipo.ID}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <span>{tipo.Nombre}</span>
                </div>
              );
            })}
          </div>
          <div className={style.positionOne}>
            <button
              type="button"
              onClick={handleAddTypes}
              disabled={errors.Tipo ? true : false}
            >
              Agregar
            </button>
          </div>
        </Modal>
        <Modal
          state={stateMenss}
          changeStatus={setStateMenss}
          setPokemonData={setPokemonData}
          pokemonData={pokemonData}
          titulo="Alerta"
        >
          <div className={style.contenido}>
            {menssage.Error ? (
              <div>
                <p>{menssage.Error}</p>
              </div>
            ) : (
              <div>
                <p>
                  Se ha creado satisfactoreamente tu pokemon con el nombre{" "}
                  {menssage.Nombre}
                </p>
              </div>
            )}
          </div>
        </Modal>
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
