customElements.define(
  "custom-score",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.textContent = `
        .score{
            font-family: 'Odibee Sans';
            width:235px;
            height: 175px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            border: 10px solid #000000;
            border-radius: 10px;
            background: #FFFFFF;
            margin:0 0 10px 0;
        }
        .score__title{
            font-size:55px;
            line-height: 61px;
            letter-spacing: 0.05em;
            text-align: center;
            margin: 0
        }
        .you,.computer{
            text-align:end;
            font-size:45px;
            margin: 0 5px 3px 0;
        }
        `;
      this.shadow.appendChild(style);
      const puntosJugador = this.getAttribute("puntosJugador");
      const puntosMaquina = this.getAttribute("puntosMaquina");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="score">
        <h1 class="score__title">Score</h1>
        <p class="you">you: ${puntosJugador}</p>
        <p class="computer">computer: ${puntosMaquina}</p>
        </div
        `;
      this.shadow.appendChild(div);
    }
  }
);
