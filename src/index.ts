import "./components/resultado-ganar";
import "./components/resultado-perder";
import "./components/resultado-empate";
import "./components/custom-Title";
import "./components/botonEl";
import "./components/piedra";
import "./components/papel";
import "./components/tijera";
import "./components/score";

import { state } from "./state";
import { initRouter } from "./router";

function main() {
  const root = document.querySelector(".root");
  initRouter(root);
  state.init();
}
main();
