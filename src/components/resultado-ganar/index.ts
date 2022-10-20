customElements.define(
  "resultado-ganar",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const imagenSrc = require("/src/images/resultado-ganaste.svg");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="imagen">
        </div>
        `;
      const contenedor = div.querySelector(".imagen") as any;
      contenedor.innerHTML = `
        <img src=${imagenSrc}>
        `;
      this.shadow.appendChild(div);
    }
  }
);
