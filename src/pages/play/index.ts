import { state } from "../../state";

export function play(direccion) {
  let contador = 3;
  const intervalo: any = setInterval(() => {
    contador--;
    const contadorEl = div.querySelector(".contador") as any;
    contadorEl.textContent = String(contador);
    if (contador == -1) {
      clearInterval(intervalo);
      direccion.goTo("/reglas");
    }
  }, 1000);

  const imagenpiedra = require("/src/images/play-piedra.svg");
  const imagenPapel = require("/src/images/play-papel.svg");
  const imagentijera = require("/src/images/play-tijera.svg");

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="contador">${contador}</div>
    <div class="hands-computer">
    <img hand="piedra" class="hand-piedra-computer hand-disabled"src=${imagenpiedra} alt="">
    <img hand="papel" class="hand-papel-computer hand-disabled"src=${imagenPapel} alt="">
    <img hand="tijera" class="hand-tijera-computer hand-disabled"src=${imagentijera} alt="">
    </div>
      <div class="hands">
        <img  class="hand-piedra"src=${imagenpiedra} alt="">
        <img  class="hand-papel"src=${imagenPapel} alt="">
        <img  class="hand-tijera"src=${imagentijera} alt="">
       </div>
    `;
  div.classList.add("contenedor");

  const handComputerPiedra = div.querySelector(".hand-piedra-computer");
  const handComputerPapel = div.querySelector(".hand-papel-computer");
  const handComputerTijera = div.querySelector(".hand-tijera-computer");

  const style = document.createElement("style");
  style.textContent = `
    .hands{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
        translate: 0px 5px;
    }
    @media(min-width:960px){
      .hands{
        width: 70%;
      }
    }
    .hand-disabled{
      display:none;
    }
    .hand-piedra-computer,
    .hand-papel-computer,
    .hand-tijera-computer{
      transform: rotate(180deg);
    }
    .hand-piedra:hover,
    .hand-papel:hover,
    .hand-tijera:hover{
      transform: translateY(-5px);
    }
    .hand-select{
      transform: translateY(-25px);
      transition: all 0.5s;
    }
    .deselected{
      opacity: 0.5;
      transform: translateY(5px);
      transition: all 0.5s;
    }
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .contador{
      font-size: 100px;
      border-radius: 250px;
      border: solid 20px blue;
      padding: 20px 50px;
      font-family: 'Odibee Sans';
    }
    .jugar{
      padding:50px 0 0 0;
    }
    `;
  const piedra = div.querySelector(".hand-piedra");
  const papel = div.querySelector(".hand-papel");
  const tijera = div.querySelector(".hand-tijera");
  const time = div.querySelector(".contador");

  const hands: any = div.querySelector(".hands")?.children;

  for (const h of hands) {
    h.addEventListener("click", () => {
      const clase = h.getAttribute("class");
      clearInterval(intervalo);

      if (clase == "hand-piedra") {
        state.playerMove("piedra");
        classDinamic(piedra);
      } else if (clase == "hand-papel") {
        state.playerMove("papel");
        classDinamic(papel);
      } else if (clase == "hand-tijera") {
        state.playerMove("tijera");
        classDinamic(tijera);
      }
    });
  }

  function classDinamic(params) {
    for (const h of hands) {
      h.classList.add("deselected");
    }
    if (params == piedra) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("hand-piedra");
      papel?.classList.remove("hand-papel");
      tijera?.classList.remove("hand-tijera");

      setTimeout(() => {
        papel?.classList.add("hand-disabled");
        tijera?.classList.add("hand-disabled");
        div.classList.add("jugar");
      }, 1000);
    }
    if (params == papel) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("hand-piedra");
      papel?.classList.remove("hand-papel");
      tijera?.classList.remove("hand-tijera");
      setTimeout(() => {
        piedra?.classList.add("hand-disabled");
        tijera?.classList.add("hand-disabled");
        div.classList.add("jugar");
      }, 1000);
    }
    if (params == tijera) {
      params?.classList.add("hand-select");
      params?.classList.remove("deselected");
      params?.classList.remove("hand-piedra");
      papel?.classList.remove("hand-papel");
      tijera?.classList.remove("hand-tijera");

      setTimeout(() => {
        piedra?.classList.add("hand-disabled");
        papel?.classList.add("hand-disabled");
        div.classList.add("jugar");
      }, 1000);
    }

    const jugada = state.getState().currentPlay.myPlay;
    const jugadaMaquina = state.getState().currentPlay.computerPlay;

    setTimeout(() => {
      time?.remove();
      if (jugadaMaquina == "piedra") {
        handComputerPiedra?.classList.remove("hand-disabled");
        const re = state.whoWins(jugada, "piedra");
        console.log(re);
      }
      if (jugadaMaquina == "papel") {
        handComputerPapel?.classList.remove("hand-disabled");
        const re = state.whoWins(jugada, "papel");
        console.log(re);
      }
      if (jugadaMaquina == "tijera") {
        handComputerTijera?.classList.remove("hand-disabled");
        const re = state.whoWins(jugada, "tijera");
        console.log(re);
      }
    }, 1000);

    setTimeout(() => {
      const currentState = state.getState();
      if (currentState.currentPlay.resultado == "empate") {
        state.pushToHistory("empate");
        direccion.goTo("/empate");
      } else if (currentState.currentPlay.resultado == "ganaste") {
        state.pushToHistory("ganaste");
        direccion.goTo("/ganar");
      } else if (currentState.currentPlay.resultado == "perdiste") {
        state.pushToHistory("perdiste");
        direccion.goTo("/perder");
      }
    }, 2800);
  }
  div.appendChild(style);
  return div;
}
