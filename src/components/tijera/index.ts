customElements.define(
  "hand-tijera",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      const imagenSrc = require("/src/images/tijera.svg");

      const img = document.createElement("img");

      img.src = imagenSrc;
      this.shadow.appendChild(img);
    }
  }
);
