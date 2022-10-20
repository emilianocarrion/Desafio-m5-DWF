import { state } from "../../../state";

export function ganar(direccion) {
  const div = document.createElement("div");
  const currentStateData = state.getState();
  div.innerHTML = `
    <resultado-ganar class="star"></resultado-ganar>
    <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina= ${currentStateData.historyScore.computadora}></custom-score>
    <custom-boton title="play again" class="botonEl"></custom-boton>
    <custom-boton title="Reset Scores" class="botonEl reset"></custom-boton>
    `;
  div.classList.add("contenedor");

  const style = document.createElement("style");
  style.textContent = `
    .contenedor{
        background: var(--fondo-verde);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
    }
    .botonEl{
        margin-top:4px;
    }
    `;
  const botonEl = div.querySelector(".botonEl");
  const reset = div.querySelector(".reset");
  botonEl?.addEventListener("click", () => {
    direccion.goTo("/play");
  });
  reset?.addEventListener("click", () => {
    state.borrarScore();
    state.init();

    direccion.goTo("/reglas");
  });

  div.appendChild(style);
  return div;
}
