import style from "./Card.module.css";
import { Link } from "react-router-dom";
import ImageComp from "../../helpers/ImageComp";
import TypesName from "../TypesName/TypesName";

const Card = (props) => {
  return (
    <div className={style.box}>
      <div className={style.containerTitle}>
        <Link to={`/detail/${props.ID}`} className={style.title}>
          <h1>{props.Nombre}</h1>
        </Link>
      </div>
      <div className={style.container}>
        <div className={style.circuloOne}></div>
        <div className={style.envase}>
          <div className={style.effect}></div>
          <div className={style.fondoImg}>
            <ImageComp className={style.image} imageUrl={props.Imagen} />
          </div>
        </div>
        <div className={style.circuloTwo}>
          <div className={style.internoCirOne}>
            <div className={style.internoCirTwo}></div>
          </div>
          <div>
            <TypesName Tipos={props.Tipos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
