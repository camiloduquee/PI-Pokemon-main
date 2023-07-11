
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import style from ''
const Form = (props) => {
  const tipos = useSelector((state) => state.allTypes);
  const [isChecked, setIsChecked] = useState(false);
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
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setIsChecked(!isChecked);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
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

          <label htmlFor="Vida">Vida</label>
          <input
            type="number"
            name="Vida"
            value={pokemonData.Vida}
            onChange={handleInputChange}
          />

          <label htmlFor="Ataque">Ataque</label>
          <input
            type="number"
            name="Ataque"
            value={pokemonData.Ataque}
            onChange={handleInputChange}
          />

          <label htmlFor="Defensa">Defensa</label>
          <input
            type="number"
            name="Defensa"
            value={pokemonData.Defensa}
            onChange={handleInputChange}
          />

          <label htmlFor="Velocidad">Velocidad</label>
          <input
            type="number"
            name="Velocidad"
            value={pokemonData.Velocidad}
            onChange={handleInputChange}
          />

          <label htmlFor="Altura">Altura</label>
          <input
            type="number"
            name="Altura"
            value={pokemonData.Altura}
            onChange={handleInputChange}
          />

          <label htmlFor="Peso">Peso</label>
          <input
            type="number"
            name="Peso"
            value={pokemonData.Peso}
            onChange={handleInputChange}
          />

          <div>
            <button type="submit">Agregar</button>
          </div>
        </div>
        <div>
          <button>Tipos de pokemón</button>
        </div>
        <Modal>
          <div >
            <h1>hola</h1>
            <p>como estanasdasd</p>
          </div>
        </Modal>
      </form>
    </div>
  );
};
export default Form;
