import React from "react";
import imgDefault from "../assets/img/pokemonDefault.png";

const ImageComp = ({ imageUrl }) => {
  const defaultImageUrl = imgDefault;

  const validateImageUrl = (url) => {
    return url.startsWith("http") || url.startsWith("https");
  };

  const renderImage = () => {
    if (validateImageUrl(imageUrl)) {
      return <img src={imageUrl} alt="Imagen" />;
    } else {
      return <img src={defaultImageUrl} alt="Imagen por defecto" />;
    }
  };

  return <div>{renderImage()}</div>;
};

export default ImageComp;
