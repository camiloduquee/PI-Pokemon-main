import styled from "styled-components";
import { statt } from "../../helpers/variables";

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border: 2px solid  #4d5b64;
  border-radius: 10px;

  background: linear-gradient(
    90deg,
    ${(props) => getColorByType(props.type)} 0%,
    ${(props) => getColorByType(props.type) + " " + props.$porcen + "%"},
    rgba(241, 250, 238, 1) ${(props) => props.$porcen + "%"} ,
    rgba(241, 250, 238, 1) 100%
  );
`;

const getColorByType = (Nombre) => statt[Nombre] || "#4d5b64";

export { ProgressBar };
