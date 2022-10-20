export function initWelcome(direccion) {
  const div = document.createElement("div");
  div.innerHTML = `
<custom-title></custom-title>
<custom-boton class="botonEl" title="Empezar"></custom-boton>
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
    botonEl?.addEventListener("click", (e) => {
      direccion.goTo("/reglas");
    });
  }
  botonAction();

  div.appendChild(style);
  return div;
}
export function welcome(direccion) {
  const div = document.createElement("div");
  div.innerHTML = `
<custom-title></custom-title>
<custom-boton class="botonEl" title="Empezar"></custom-boton>
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
    botonEl?.addEventListener("click", (e) => {
      direccion.goTo("/reglas");
    });
  }
  botonAction();

  div.appendChild(style);
  return div;
}
