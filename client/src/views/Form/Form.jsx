import { useState } from "react";
import { useSelector } from "react-redux";
import { BoxTipos } from "./styledbutton";
import Modal from "../../components/Modal/Modal";
import style from "../Form/F.module.css";
import validation from "./validation";
import postForm from "./postForm";
import Footer from "../../components/Footer/Footer";
import picachuSvg from "../../assets/svg/picachu.svg";
import groupSvg from "../../assets/svg/group.svg";
import infoSvg from "../../assets/svg/info.svg";
import checkSvg from "../../assets/svg/check.svg";

const Form = () => {
  // -------------  Estados ----------
  const Tipos = useSelector((state) => state.allTypes);
  const [estadoModal, setEstadoModal] = useState(false);
  const [estadoModaError, setEstadoModalError] = useState(false);
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
  //

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
    const value = event.target.value;
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
  const tipofilter = () => {
    const idsFiltrados = pokemonData.Tipo.map((tipo) => {
      const objetoEncontrado = Tipos.find((objeto) => objeto.Nombre === tipo);
      return objetoEncontrado ? objetoEncontrado.ID : null;
    });
    pokemonData.Tipo = idsFiltrados;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    tipofilter();
    if (!Object.values(errors).length) {
      const data = await postForm(pokemonData);
      if (data.Nombre) {
        setMenssage({
          Nombre: data.Nombre,
        });
      } else {
        setMenssage({
          Error: data.Error,
        });
      }
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
    }
    setStateMenss(true);
  };

  const handleAddTypes = () => {
    if (!errors.Tipo) {
      setEstadoModal(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.picachuPosition}>
        <img src={picachuSvg} alt="picachuSvg" />
      </div>
      <div className={style.box}>
        <form className={style.boxForm} onSubmit={handleSubmit}>
          <div className={style.titulo}>
            <h1>Create Pokemon</h1>
          </div>

          <div className={style.gridOne}>
            <div className={style.inputs}>
              <div>
                <label htmlFor="NombreForm">Name</label>
                <input
                  id="NombreForm"
                  type="text"
                  placeholder="Name of the Pokemon"
                  name="Nombre"
                  value={pokemonData.Nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="ImagenForm">Image</label>
                <input
                  id="ImagenForm"
                  type="text"
                  placeholder="Pokemón image..."
                  name="Imagen"
                  value={pokemonData.Imagen}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={style.containertipos}>
              {/*           boton para ver los tipos de pokemon seleccion                          */}

              <button
                className={style.button}
                type="button"
                onClick={() => {
                  setEstadoModal(!estadoModal);
                  setPokemonData({
                    ...pokemonData,
                    Tipo: [],
                  });
                }}
              >
                <div className={style.img}>
                  <img src={groupSvg} title="Tipos de pokemón"></img>
                </div>
              </button>

              {pokemonData.Tipo.length === 0 && (
                <div className={style.tipos}>Select your type</div>
              )}
              {/*          renderizado de los tipos de pokemon con su color respectivo       */}

              {!estadoModal && (
                <div
                  className={
                    pokemonData.Tipo.length === 1 ? style.containertipos : ""
                  }
                >
                  {pokemonData.Tipo.map((value, index) => {
                    return (
                      <BoxTipos key={index} type={value}>
                        {value}
                      </BoxTipos>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className={style.boxDate}>
            <div>
              <label htmlFor="VidaForm">Life</label>
            </div>
            <div className={style.gridTwo}>
              <div>
                <input
                  id="VidaForm"
                  type="range"
                  min={0}
                  max={100}
                  name="Vida"
                  value={pokemonData.Vida}
                  onChange={handleInputChange}
                  className={style.range}
                />
              </div>
              <div className={style.count}>{pokemonData.Vida}</div>
            </div>

            <div>
              <label htmlFor="AtaqueForm">Attack</label>
            </div>
            <div className={style.gridTwo}>
              <div>
                <input
                  id="AtaqueForm"
                  type="range"
                  min={0}
                  max={100}
                  name="Ataque"
                  value={pokemonData.Ataque}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.count}>{pokemonData.Ataque}</div>
            </div>

            <div>
              <label htmlFor="DefensaForm">Defense</label>
            </div>
            <div className={style.gridTwo}>
              <div>
                <input
                  id="DefensaForm"
                  type="range"
                  min={0}
                  max={100}
                  name="Defensa"
                  value={pokemonData.Defensa}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.count}>{pokemonData.Defensa}</div>
            </div>
            <div>
              <label htmlFor="VelocidadForm">Speed</label>
            </div>
            <div className={style.gridTwo}>
              <div>
                <input
                  id="VelocidadForm"
                  type="range"
                  min={0}
                  max={100}
                  name="Velocidad"
                  value={pokemonData.Velocidad}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.count}>{pokemonData.Velocidad}</div>
            </div>
            <div>
              <label htmlFor="AlturaForm">Height</label>
            </div>
            <div className={style.gridTwo}>
              <div>
                <input
                  id="AlturaForm"
                  type="range"
                  min={0}
                  max={100}
                  name="Altura"
                  value={pokemonData.Altura}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.count}>{pokemonData.Altura}</div>
            </div>
            <div>
              <label htmlFor="PesoForm">Weight</label>
            </div>
            <div className={style.gridTwo}>
              <div>
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
              <div className={style.count}>{pokemonData.Peso}</div>
            </div>
          </div>

          <Modal
            state={estadoModal}
            changeStatus={setEstadoModal}
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            titulo="Types of pokemon"
          >
            <div className={style.contenido}>
              {Tipos.map((tipo) => {
                return (
                  <div key={tipo.ID}>
                    <input
                      name="Tipo"
                      value={tipo.Nombre}
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
                className={style.buttonModal}
                type="button"
                onClick={handleAddTypes}
                disabled={errors.Tipo ? true : false}
              >
                Select
              </button>
            </div>
          </Modal>
          <Modal
            state={stateMenss}
            changeStatus={setStateMenss}
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            titulo="Alert"
          >
            <div className={style.contenido}>
              <div>
                {menssage.Error && <p>{menssage.Error}</p>}
                {menssage.Nombre && (
                  <div className={style.menssageError}>
                    {` Congratulations, you have successfully created your pokemon with the name `}<div className={style.createPoke}>{` "${menssage.Nombre}"`}</div>
                  </div>
                )}
              </div>
            </div>
          </Modal>
          <Modal
            state={estadoModaError}
            changeStatus={setEstadoModalError}
            // setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            titulo="Alert"
          >
            <div className={style.menssageError}>
            {errors.Nombre && <div>{errors.Nombre}</div>}
            {errors.Imagen && <div>{errors.Imagen}</div>}
            {errors.Vida === 0 ? "" : <div>{errors.Vida}</div>}
            {errors.Ataque === 0 ? "" : <div>{errors.Ataque}</div>}
            {errors.Defensa === 0 ? "" : <div>{errors.Defensa}</div>}
            {errors.Tipo && <div>{errors.Tipo}</div>}
            </div>
          </Modal>
          <div className={style.containetButtonSubmit}>
            <div>
              <button
                className={style.buttonSub}
                type="submit"
                disabled={!Object.values(errors).length ? false : true}
              >
                Create
              </button>
            </div>
            {!Object.values(errors).length ? (
              <div className={style.check}>
                <img src={checkSvg} title="Datos Correctos" />
              </div>
            ) : (
              <button
                className={style.infoSvg}
                type="button"
                onClick={() => {
                  setEstadoModalError(!estadoModaError);
                }}
              >
                <img src={infoSvg} title="Errors" />
              </button>
            )}
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
export default Form;
