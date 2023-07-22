import styled from "styled-components";
import { colorsTipos } from "../../helpers/variables";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
`;
const BoxTipos = styled.div`
  width: 60px;
  padding: 10px;
  margin: ${(props) =>
    props.$number === 2 ? "10px 2px 10px 2px" : "30px 2px 10px 2px"};
  border-radius: 20px;
  background-color: ${(props) => getColorByType(props.type)};
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -ms-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  transform: skew(-20deg);

  -webkit-box-shadow: -7px 12px 5px -9px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: -7px 12px 5px -9px rgba(0, 0, 0, 0.84);
  box-shadow: -7px 12px 5px -9px rgba(0, 0, 0, 0.84);
`;

const Text = styled.div`
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg);
  -ms-transform: skew(20deg);
  -o-transform: skew(20deg);
  transform: skew(20deg);
`;

const getColorByType = (Nombre) => colorsTipos[Nombre] || "#4d5b64";


export { BoxTipos, Container, Text };
