import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import logPokemon from "../../assets/img/LogoSombra.png";
import picachuImg from "../../assets/img/picachu.png";
const Landing = () => {
  const navigation = useNavigate();
  const handleGoToHome = () => {
    navigation("/home");
  };
  return (
    <div className={style.container}>
      <div className={style.borderRight}></div>
      <div className={style.containerInterior}>
        <img src={logPokemon} className={style.image} />
        <div className={style.circulo}>
        <button className={style.button} onClick={handleGoToHome}>
          Home
        </button>

        </div>
       
        <img src={picachuImg} className={style.imagePicachu}/>
      </div>
      <div className={style.borderLeft} ></div>
    </div>
  );
};
export default Landing;
