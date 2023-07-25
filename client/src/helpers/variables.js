// ----------- rutas ----------
// const endpoint = "http://localhost:3001";
const endpoint = "https://pi-pokemon-main-production.up.railway.app";
const l_gitHub = "#";
const l_linkedin = "#";
// axios.defaults.baseURL = `${endpoint}`;
// ------------Traductor --------------

const TraductorTipos = [
  "Normal",
  "Lucha",
  "Volar",
  "Veneno",
  "Suelo",
  "Roca",
  "Bicho",
  "Fantasma",
  "Acero",
  "Fuego",
  "Agua",
  "Hierba",
  "Eléctrico",
  "Psíquico",
  "Hielo",
  "Dragón",
  "Oscuro",
  "Hada",
  "Desconocido",
  "Sombra",
];

const colorsTipos = {
  normal: "#a4acaf",
  fighting: "#d56723",
  flying: "#3dc7ef",
  poison: "#7e0058",
  ground: "#ab9842",
  rock: "#a38c21",
  bug: "#729f3f",
  ghost: "#4d5b64",
  steel: "#9eb7b8",
  fire: "#ff7402",
  water: "#4592c4",
  grass: "#9bcc50",
  electric: "#bba909",
  psychic: "#f366b9",
  ice: "#51c4e7",
  dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
  dark: "#707070",
  fairy: "#fdb9e9",
  unknown: "#757575",
  shadow: "#7b62a3",
};

const statt = {
  Hp: "#E63946",
  Atk: "#1D3557",
  Def: "#9bcc50",
  V: "#A8DADC",
  A: "#ff7402",
  P: "#a4acaf",
};

export { endpoint, l_gitHub, l_linkedin, TraductorTipos, colorsTipos, statt };
