import style from "./DetailCard.module.css";
import { useNavigate } from "react-router-dom";
import ImageComp from "../../helpers/ImgComparador/ImageComp";
import TypesName from "../TypesName/TypesName";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import { ProgressBar } from "./StyledBarra";
import { useState } from "react";

const DetailCard = ({ character }) => {
  const [buttonId, setButtonId] = useState(false);
  const navigate = useNavigate();
  const backToTheHome = () => {
    navigate("/home");
  };

  return (
    <>
      {!character.Nombre ? (
        <Loader />
      ) : (
        <div className={style.contanerDetail}>
          {/*         seccion 1           */}

          <div className={style.box}>
            <div className={style.containerTitle}>
              <div className={style.boxTitle}>
                <h1 className={style.title}>{character.Nombre}</h1>
              </div>
            </div>
            <div className={style.container}>
              <div className={style.circuloOne}>
                <div className={style.internoOneCirOne}>
                  <div className={style.internoOneCirTwo}></div>
                </div>
              </div>

              <div className={style.envase}>
                <div className={style.effect}></div>

                <ImageComp imageUrl={character.Imagen} min={true} />
              </div>

              <div className={style.circuloTwo}>
                <div className={style.internoCirOne}>
                  <div className={style.internoCirTwo}></div>
                </div>
              </div>
            </div>
            {/*           seccion Info          */}

            <div className={style.boxInfo}>
              <div className={style.union}>
                <div className={style.vLineLeftOne}></div>
                <div className={style.vLineLeftTwo}></div>
                <div className={style.vLineRighOne}></div>
                <div className={style.vLineRighTwo}></div>
              </div>
              <div className={style.containerInfo}>
                <div className={style.containerInterno}>
                  {/* --------------- detalles del pokemon ---------------- */}
                  <div className={style.stats}>
                    <div className={style.statGroup}>
                      <span>Hp</span>
                      <ProgressBar
                        type={"Hp"}
                        $porcen={character.Vida.toString()}
                      />
                      <span>{character.Vida}</span>
                    </div>

                    <div className={style.statGroup}>
                      <span>Atk</span>
                      <ProgressBar
                        type={"Atk"}
                        $porcen={character.Ataque.toString()}
                      />
                      <span>{character.Ataque}</span>
                    </div>

                    <div className={style.statGroup}>
                      <span>Def</span>
                      <ProgressBar
                        type={"Def"}
                        $porcen={character.Defensa.toString()}
                      />
                      <span>{character.Defensa}</span>
                    </div>

                    {character.Velocidad ? (
                      <div className={style.statGroup}>
                        <span>V</span>
                        <ProgressBar
                          type={"V"}
                          $porcen={character.Velocidad.toString()}
                        />
                        <span>{character.Velocidad}</span>
                      </div>
                    ) : (
                      ""
                    )}

                    {character.Altura ? (
                      <div className={style.statGroup}>
                        <span>A</span>
                        <ProgressBar
                          type={"A"}
                          $porcen={character.Altura.toString()}
                        />
                        <span>{character.Altura}</span>
                      </div>
                    ) : (
                      ""
                    )}

                    {character.Peso ? (
                      <div className={style.statGroup}>
                        <span>P</span>
                        <ProgressBar
                          type={"P"}
                          $porcen={Math.trunc(character.Peso / 10).toString()}
                        />
                        <span>{character.Peso}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className={style.typeF}>
                  {buttonId ? (
                    <div className={style.statGroupType}>
                      <div className={style.tipoPokemon}>
                        <span>Tipo de Pokemón</span>
                      </div>
                      <div className={style.type}>
                        <TypesName Tipos={character.Types} />
                      </div>
                    </div>
                  ) : (
                    <div className={style.statGroupType}>
                      <div className={style.tipoPokemon}>
                        <span className={style.boxNombre}>
                          {character.Nombre}
                        </span>
                      </div>
                      <div>
                        <span className={style.boxId}>{character.ID}</span>
                      </div>
                    </div>
                  )}

                  <div className={style.id}>
                    <button
                      className={style.buttonId}
                      onClick={() => setButtonId(!buttonId)}
                      title="pokemón id"
                    >
                      {buttonId ? "Id" : "Tipo"}
                    </button>
                  </div>
                </div>
              </div>
              <div className={style.buttonBox}>
                <button className={style.button} onClick={backToTheHome}>
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DetailCard;
