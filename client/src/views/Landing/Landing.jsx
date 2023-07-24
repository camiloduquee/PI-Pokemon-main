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
        
        <div className={style.pokemonApi}>
        <div className={style.bienvenido}>welcome to the</div>
          <img src={logPokemon} className={style.image} />
          <div className={style.api}>API</div>
        </div>

        <div className={style.circulo}>
          <button className={style.button} onClick={handleGoToHome}>
            Let's go!
          </button>
        </div>

        <img src={picachuImg} className={style.imagePicachu} />
      </div>
      <div className={style.borderLeft}></div>
    </div>
  );
};
export default Landing;
