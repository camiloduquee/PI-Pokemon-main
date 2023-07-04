import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.container}>
      <p>{props.ID}</p>
      {/* <p>{props.Imagen}</p> */} 
      <p>{props.Nombre}</p>
      <p>{props.Vida}</p>
      <p>{props.Ataque}</p>
      <p>{props.Defensa}</p>
      <p>{props.Velocidad}</p>
      <p>{props.Altura}</p>
      <p>{props.Peso}</p>
      {/* <p>{props.Types}</p> */}
    </div>
  );
};
export default Card;
