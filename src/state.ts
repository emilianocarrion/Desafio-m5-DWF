type Jugada = "piedra" | "papel" | "tijera";
type Resultado = "empate" | "ganaste" | "perdiste";

const state = {
  data: {
    currentPlay: {
      myPlay: "",
      computerPlay: "",
      resultado: [],
    },
    historyScore: {
      jugador: 0,
      computadora: 0,
    },
  },

  init() {
    const data: any = localStorage.getItem("scoreData");
    if (!data) {
      return console.log("bienvenidos a piedra papel y tijera");
    }
    this.data.historyScore = JSON.parse(data);
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
  },

  playerMove(selectHand: Jugada) {
    const currentStateData = this.getState();
    currentStateData.currentPlay.myPlay = selectHand;

    const computerMove = () => {
      const randomMove = Math.floor(Math.random() * 3);
      const playList = ["piedra", "papel", "tijera"];
      const randomPlay = playList[randomMove];
      return randomPlay;
    };
    const data = currentStateData as any;
    data.currentPlay.computerPlay = computerMove();
  },

  whoWins(jugador: Jugada, computadora: Jugada) {
    const data = this.getState();
    const resultado = data.currentPlay.resultado;
    const piedra: boolean = jugador == "piedra" && computadora == "tijera";
    const papel: boolean = jugador == "papel" && computadora == "piedra";
    const tijera: boolean = jugador == "tijera" && computadora == "papel";
    const playerWins = [piedra, papel, tijera].includes(true);

    const piedraEmpate: boolean =
      jugador == "piedra" && computadora == "piedra";
    const papelEmpate: boolean = jugador == "papel" && computadora == "papel";
    const tijeraEmpate: boolean =
      jugador == "tijera" && computadora == "tijera";
    const empate = [piedraEmpate, papelEmpate, tijeraEmpate].includes(true);

    if (empate) {
      return (resultado[0] = "empate");
    }
    if (playerWins) {
      return (resultado[0] = "ganaste");
    } else {
      return (resultado[0] = "perdiste");
    }
  },

  pushToHistory(resultado: Resultado) {
    const currentStateData = this.getState();
    const jugadorScore = currentStateData.historyScore.jugador;
    const computerScore = currentStateData.historyScore.computadora;

    if (resultado == "ganaste") {
      this.setState({
        ...currentStateData,
        historyScore: {
          jugador: jugadorScore + 1,
          computadora: computerScore,
        },
      });
    } else if (resultado == "perdiste") {
      this.setState({
        ...currentStateData,
        historyScore: {
          jugador: jugadorScore,
          computadora: computerScore + 1,
        },
      });
    }
    this.saveScore();
  },
  saveScore() {
    const currentStateData = this.getState().historyScore;
    localStorage.setItem("scoreData", JSON.stringify(currentStateData));
  },
  borrarScore() {
    const sd = { jugador: 0, computadora: 0 };
    localStorage.setItem("scoreData", JSON.stringify(sd));
  },
};
export { state };
