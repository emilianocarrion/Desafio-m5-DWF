customElements.define(
  "resultado-empate",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const imagenSrc = require("/src/images/resultado-empate.png");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="imagen">
        </div>
        `;

      const style = document.createElement("style");
      style.textContent = `
        .estrella{
            width:255px;
            heigth:260px;
        }
        `;
      this.shadow.appendChild(style);

      const contenedor = div.querySelector(".imagen") as any;
      contenedor.innerHTML = `
        <img class="estrella" src=${imagenSrc}>
        `;
      this.shadow.appendChild(div);
    }
  }
);
