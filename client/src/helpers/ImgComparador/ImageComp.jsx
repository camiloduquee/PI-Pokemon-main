import imgDefault from "../../assets/img/pokemonDefault.png";
import style from "./ImageComp.module.css";
const ImageComp = ({ imageUrl, min }) => {
  const defaultImageUrl = imgDefault;

  const validateImageUrl = (url) => {
    return url.startsWith("http") || url.startsWith("https");
  };

  const renderImage = () => {
    if (validateImageUrl(imageUrl)) {
      return min ? (
        <img
          src={imageUrl}
          alt="Imagen"
          className={min? style.animateImg : ""}
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <img
          src={imageUrl}
          alt="Imagen"
          style={{ width: "200px", height: "200px" }}
        />
      );
    } else {
      return (
        <img
          src={defaultImageUrl}
          alt="Imagen por defecto"
          style={{ width: "200px", height: "200px" }}
        />
      );
    }
  };

  return <>{renderImage()}</>;
};

export default ImageComp;
