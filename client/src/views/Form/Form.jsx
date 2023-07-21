import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import style from "../Form/F.module.css";
import validation from "./validation";
import postForm from "./postForm";
import Footer from "../../components/Footer/Footer";
import picachuSvg from "../../assets/svg/picachu.svg";
import groupSvg from "../../assets/svg/group.svg";
import infoSvg from "../../assets/svg/info.svg";
import checkSvg from "../../assets/svg/check.svg";
import { allTypes } from "../../redux/actions";

const Form = () => {

  // -------------  Estados ----------
  const Tipos = useSelector((state) => state.allTypes);
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(allTypes("http://localhost:3001/types"));
      
  }, []);
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
            <h1>Crear Pokemón</h1>
          </div>

          <div className={style.gridOne}>
            <div className={style.inputs}>
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
              </div>
              <div>
                <label htmlFor="ImagenForm">Imagen</label>
                <input
                  id="ImagenForm"
                  type="text"
                  placeholder="Pokemón imagen..."
                  name="Imagen"
                  value={pokemonData.Imagen}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={style.containertipos}>
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
                <div className={style.tipos}>Selecciona su tipo</div>
              )}
              {!estadoModal && (
                <div
                  className={
                    pokemonData.Tipo.length === 1 ? style.containertipos : ""
                  }
                >
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
          </div>

          <div className={style.boxDate}>
            <div>
              <label htmlFor="VidaForm">Vida</label>
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
              <label htmlFor="AtaqueForm">Ataque</label>
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
              <label htmlFor="DefensaForm">Defensa</label>
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
              <label htmlFor="VelocidadForm">Velocidad</label>
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
              <label htmlFor="AlturaForm">Altura</label>
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
              <label htmlFor="PesoForm">Peso</label>
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
                className={style.buttonModal}
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
              <div>
                {menssage.Error && <p>{menssage.Error}</p>}
                {menssage.Nombre && (
                  <p>
                    {`Se ha creado satisfactoreamente tu pokemon con el nombre ${menssage.Nombre}`}
                  </p>
                )}
              </div>
            </div>
          </Modal>
          <Modal
            state={estadoModaError}
            changeStatus={setEstadoModalError}
            setPokemonData={setPokemonData}
            pokemonData={pokemonData}
            titulo="Alerta"
          >
            {errors.Nombre && <p>{errors.Nombre}</p>}
            {errors.Imagen && <p>{errors.Imagen}</p>}
            {errors.Vida === 0 ? "" : <p>{errors.Vida}</p>}
            {errors.Ataque === 0 ? "" : <p>{errors.Ataque}</p>}
            {errors.Defensa === 0 ? "" : <p>{errors.Defensa}</p>}
            {errors.Tipo && <p>{errors.Tipo}</p>}
          </Modal>
          <div className={style.containetButtonSubmit}>
            <div>
              <button
                className={style.buttonSub}
                type="submit"
                disabled={!Object.values(errors).length ? false : true}
              >
                Crear
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
                <img src={infoSvg} title="Errores" />
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
