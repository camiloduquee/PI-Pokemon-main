import React from "react";

function ListItem(props) {
  return <li>{props.value}</li>;
}

function TypesName(props) {
  const tipos = props.Tipos;
  const listItems = tipos?.map((tipo) => (
    <ListItem key={tipo.Nombre.toString()} value={tipo.Nombre} />
  ));
  return <ul>{listItems}</ul>;
}

export default TypesName;
