import React from "react";
import imgDefault from "../assets/img/pokemonDefault.png";

const ImageComp = ({ imageUrl }) => {
  const defaultImageUrl = imgDefault;

  const validateImageUrl = (url) => {
    return url.startsWith("http") || url.startsWith("https");
  };

  const renderImage = () => {
    if (validateImageUrl(imageUrl)) {
      return <img src={imageUrl} alt="Imagen" style={{width: "200px", height: "200px"}}/>;
    } else {
      return <img src={defaultImageUrl} alt="Imagen por defecto" />;
    }
  };

  return <>{renderImage()}</>;
};

export default ImageComp;
