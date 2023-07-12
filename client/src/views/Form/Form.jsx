import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import style from "../Form/F.module.css";
import validation from "./validation";

const Form = () => {
  const tipos = useSelector((state) => state.allTypes);
  // -------------  Estados ----------
  const [estadoModal, setEstadoModal] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    Nombre: "",
    Imagen: "",
    Vida: 0,
    Ataque: 0,
    Defensa: 0,
    Velocidad: 0,
    Altura: 0,
    Peso: 0,
    Tipos: [],
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
    Tipos: [],
  });

  // ----------- Funciones ---------

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
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
        [property]: [...pokemonData.Tipos, value],
      });
      setErrors(
        validation({
          ...pokemonData,
          [property]: [...pokemonData.Tipos, value],
        })
      );
    } else {
      setPokemonData({
        ...pokemonData,
        [property]: [...pokemonData.Tipos].filter((item) => item !== value),
      });
      setErrors(
        validation({
          ...pokemonData,
          [property]: [...pokemonData.Tipos].filter((item) => item !== value),
        })
      );
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
      // mando mi funcion para mandar los datos a la base de datos
      pokemonData({
        Nombre: "",
        Imagen: "",
        Vida: 0,
        Ataque: 0,
        Defensa: 0,
        Velocidad: 0,
        Altura: 0,
        Peso: 0,
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
      });
    } else {
      alert("Debes corregir los errores");
    }
  };
  const handleAddTypes = () => {
    if (!errors.Tipos) {
      setEstadoModal(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Crear Pokemón</div>
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <input
            type="text"
            placeholder="Nombre del Pokemón"
            name="Nombre"
            value={pokemonData.Nombre}
            onChange={handleInputChange}
          />

          <label htmlFor="Imagen">Imagen</label>
          <input
            type="text"
            placeholder="Pokemón imagen..."
            name="Imagen"
            value={pokemonData.Imagen}
            onChange={handleInputChange}
          />
          <div>
            <label htmlFor="Vida">Vida</label>
            <input
              type="range"
              min={1}
              max={100}
              name="Vida"
              value={pokemonData.Vida}
              onChange={handleInputChange}
            />

            <label htmlFor="Ataque">Ataque</label>
            <input
              type="range"
              min={1}
              max={100}
              name="Ataque"
              value={pokemonData.Ataque}
              onChange={handleInputChange}
            />

            <label htmlFor="Defensa">Defensa</label>
            <input
              type="range"
              min={1}
              max={100}
              name="Defensa"
              value={pokemonData.Defensa}
              onChange={handleInputChange}
            />

            <label htmlFor="Velocidad">Velocidad</label>
            <input
              type="range"
              min={1}
              max={100}
              name="Velocidad"
              value={pokemonData.Velocidad}
              onChange={handleInputChange}
            />

            <label htmlFor="Altura">Altura</label>
            <input
              type="range"
              min={1}
              max={100}
              name="Altura"
              value={pokemonData.Altura}
              onChange={handleInputChange}
            />

            <label htmlFor="Peso">Peso</label>
            <input
              type="range"
              min={1}
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
                Tipos: [],
              });
            }}
          >
            Tipos de pokemón
          </button>
        
        {!estadoModal && (
          <div className={style.containertipos}>
            {tipos.map((Element) => {
              const result = pokemonData.Tipos.includes(Element.ID);
              return result && 
              <div 
              key={Element.ID}
              className={style.containerBox}
              >
              {Element.Nombre}
              </div>;
            })}
          </div>
        )}
        </div>
        <Modal
          state={estadoModal}
          changeStatus={setEstadoModal}
          setPokemonData={setPokemonData}
          pokemonData={pokemonData}
        >
          <div className={style.contenido}>
            {tipos.map((tipo) => {
              return (
                <div key={tipo.ID}>
                  <input
                    name="Tipos"
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
              disabled={errors.Tipos ? true : false}
            >
              Agregar
            </button>
          </div>
        </Modal>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
