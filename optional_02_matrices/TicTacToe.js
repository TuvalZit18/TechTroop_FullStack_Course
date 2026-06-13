import Matrix from "./Matrix.js";

class TicTacToe extends Matrix {
  constructor() {
    super();
    this.currentPlayer = 1;
  }

  loadBoard() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push([]);
      for (let j = 0; j < 3; j++) {
        arr[i].push(".");
      }
    }
    this.matrix = arr;
  }
  play(row, col, player) {
    if (this.currentPlayer !== player)
      console.log(`This is player ${this.currentPlayer} turn, not yours!`);
    if (this.get(row, col) !== ".")
      console.log("Position already taken, please make another move");
    if (player === 1) {
      this.alter(row, col, "x");
      this.currentPlayer = 2;
      if (this.matrix.every((row) => row[col] === "x")) {
        console.log("Congratulation player 1");
        this.loadBoard();
      }
      if (this.isBoardFull()) {
        console.log("Game is tied. Thank you for playing!");
        this.loadBoard();
      }
    } else {
      this.alter(row, col, "o");
      this.currentPlayer = 1;
      if (this.matrix.every((row) => row[col] === "o")) {
        console.log("Congratulation player 2");
        this.loadBoard();
      }
      if (this.isBoardFull()) {
        console.log("Game is tied. Thank you for playing!");
        this.loadBoard();
      }
    }
  }
  isBoardFull() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.matrix[i][j] === ".") return false;
      }
    }
    return true;
  }
}
export default TicTacToe;
