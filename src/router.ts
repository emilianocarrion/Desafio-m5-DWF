import { play } from "./pages/play";
import { reglas } from "./pages/reglas";
import { ganar } from "./pages/resultado/ganaste";
import { perder } from "./pages/resultado/perdiste";
import { empate } from "./pages/resultado/empate";
import { welcome } from "./pages/welcome";

const BASE_PATH = "/Desafio-m5-DWF";

const routes = [
  {
    path: /\/welcome/,
    component: welcome,
  },
  {
    path: /\/reglas/,
    component: reglas,
  },
  {
    path: /\/play/,
    component: play,
  },
  {
    path: /\/ganar/,
    component: ganar,
  },
  {
    path: /\/perder/,
    component: perder,
  },
  {
    path: /\/empate/,
    component: empate,
  },
];

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: any) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log("el handler recibio una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el: any = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.host.includes("github.io")) {
    goTo("/welcome");
  } else if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
