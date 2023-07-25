import styled from "styled-components";
import { statt, colorsTipos } from "../../helpers/variables";
const colorType = (color) => {
  console.log(color.length === 2)
  if(color.length === 2) return getColorByType(color[1].Nombre)
  return getColorByType(color[0].Nombre);
}
const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border: 2px solid  #4d5b64;
  border-radius: 10px;

  background: linear-gradient(
    90deg,
    ${(props) => getColorByStatt(props.type)} 0%,
    ${(props) => getColorByStatt(props.type) + " " + props.$porcen + "%"},
    rgba(241, 250, 238, 1) ${(props) => props.$porcen + "%"} ,
    rgba(241, 250, 238, 1) 100%
  );
`;
const BackgroundTypeColor = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    45deg,
    #e63946 0%,
    #e63946 30%,
    ${({color}) => getColorByType(color[0].Nombre)} 30%,
    ${({color}) => getColorByType(color[0].Nombre)} 50%,
    ${({color}) => colorType(color)} 50%,
    ${({color}) => colorType(color)} 70%,
    #e63946 70%,
    #e63946 100%
  );
`;

const getColorByStatt = (Nombre) => statt[Nombre] || "#4d5b64";
const getColorByType = (Nombre) => colorsTipos[Nombre] || "#4d5b64";

export { ProgressBar, BackgroundTypeColor };


