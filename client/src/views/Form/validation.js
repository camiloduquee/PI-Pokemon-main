const validation = (pokemonData) => {
  const ExpRegSoloNumeros = /^[0-9]+$/;
  const ExpRegLetrasEspacio = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/i;
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d{1,5})?(\/[\w.-]*)*(\?[\w&=]*)?(#(.*))?$/;
  const errors = {};

const isValidImageUrl = (url) => {
    return imageRegex.test(url) && urlRegex.test(url);
  };

if (ExpRegLetrasEspacio.exec(pokemonData.Nombre) == null || pokemonData.Nombre.length < 6 ) 
    {
        errors.Nombre = "El nombre no debe tener numeros o caracteres especiales";
            if (pokemonData.Nombre.length < 6) 
                
                {
                    errors.Nombre = "El nombre esta vacio o es muy corto";
                }

            if (pokemonData.Nombre.length > 12) 
                
                {
                    errors.Nombre = "Nombre demasiado largo";
                }
    }
if(!isValidImageUrl(pokemonData.Imagen))
    {
        errors.Imagen = "Ingresa una url valida de una imagen";
    }

if (pokemonData.Tipo.length === 0 || pokemonData.Tipo.length > 2) 
    {
        errors.Tipo = "Debes seleccionar una (1) o dos (2) opciones.";
    }

return errors;

};
export default validation;
