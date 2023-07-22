import { BoxTipos, Container, Text } from "./styles";

function TypesName(props) {
  const number = props.Tipos.length;
   return (
    <Container>
      {props.Tipos?.map((type, index) => {
        
        return (
          <BoxTipos key={index} type={type.Nombre} $number={number}>
            <Text>{type.Nombre}</Text>
          </BoxTipos>
        );
      })}
    </Container>
  );
}

export default TypesName;
