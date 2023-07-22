import styled from "styled-components";
import { colorsTipos } from "../../helpers/variables";


const BoxTipos = styled.div`
  background: ${(props) => getColorByType(props.type)};
  color: #f1faee;
  width: 10vw;
  padding: 10px 0px 10px 0px;
  border-radius: 10px;
  text-align: center;
  margin: 10px;
`;

const getColorByType = (Nombre) => colorsTipos[Nombre] || "#4d5b64";



export { BoxTipos };