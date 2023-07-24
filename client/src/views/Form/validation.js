const validation = (pokemonData) => {
  
  const ExpRegSoloNumeros = /^[0-9]+$/;
  const ExpRegLetrasEspacio = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/i;
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d{1,5})?(\/[\w.-]*)*(\?[\w&=]*)?(#(.*))?$/;
  
  const errors = {};

const isValidImageUrl = (url) => {
    return imageRegex.test(url) && urlRegex.test(url);
  };

if (ExpRegLetrasEspacio.exec(pokemonData.Nombre) == null || pokemonData.Nombre.length < 6 || pokemonData.Nombre.length > 12) 
    {
        errors.Nombre = "The name must not contain numbers or special characters.";
            if (pokemonData.Nombre.length < 6) 
                
                {
                    errors.Nombre = "The name is empty or too short.";
                }

            if (pokemonData.Nombre.length > 12) 
                
                {
                    errors.Nombre = "Name too long.";
                }
    }

if (!isValidImageUrl(pokemonData.Imagen))
    {
        errors.Imagen = "Invalid url, must end in format (jpg, png).";
    }
    
if (pokemonData.Vida < 10)
    {
        errors.Vida ="Life must be greater than 10.";
    }

if (pokemonData.Ataque < 1)
    {
        errors.Ataque ="Attack must be greater than 1.";
    }

if (pokemonData.Defensa < 1)
    {
        errors.Defensa ="Defense must be greater than 1.";
    }



if (pokemonData.Tipo.length === 0 || pokemonData.Tipo.length > 2) 
    {
        errors.Tipo = "You must select at least one (1) or two (2) options in the pokemon type.";
    }

return errors;

};
export default validation;
