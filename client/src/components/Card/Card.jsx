import style from "./Card.module.css";
import { Link } from "react-router-dom";
import ImageComp from "../../helpers/ImageComp";
import TypesName from "../TypesName/TypesName";

const Card = (props) => {
  
  return (
    <div className={style.container}>
      <ImageComp imageUrl={props.Imagen} />
      <Link to={`/detail/${props.ID}`}>
        <h1>{props.Nombre}</h1>
      </Link>
     <TypesName Tipos={props.Tipos}/>
    </div>
  );
};
export default Card;
