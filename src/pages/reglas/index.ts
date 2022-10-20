export function reglas(direccion) {
  const div = document.createElement("div");
  const imagenReglas = require("/src/images/reglas.svg");
  div.innerHTML = `
    <img src=${imagenReglas} alt="">
    <custom-boton class="botonEl" title="¡Jugar!"></custom-boton>
    <div class="hands">
        <hand-piedra></hand-piedra>
        <hand-papel></hand-papel>
        <hand-tijera></hand-tijera>
    </div>
    `;
  div.classList.add("contenedor");

  const style = document.createElement("style");
  style.textContent = `
    .hands{
        display:flex;
        width: 80%;
        justify-content: space-evenly;
        position: relative;
        top: 10px;
    }
    @media(min-width:960px){
        .hands{
            width: 50%;
        }
    }
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    `;
  function botonAction() {
    const botonEl = div.querySelector(".botonEl");
    botonEl?.addEventListener("click", () => {
      direccion.goTo("/play");
    });
  }
  botonAction();

  div.appendChild(style);
  return div;
}
