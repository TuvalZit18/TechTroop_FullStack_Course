class Matrix {
  constructor(rows, cols) {
    this.matrix = this._generateMatrix(rows, cols);
  }
  _generateMatrix(numRows = 0, numColumns = 0) {
    let matrix = [];
    let num = 1;

    for (let r = 0; r < numRows; r++) {
      matrix.push([]);
      for (let c = 0; c < numColumns; c++) {
        matrix[r].push(num++);
      }
    }
    return matrix;
  }
  get(row, col) {
    return this.matrix[row][col];
  }
  alter(row, col, value) {
    this.matrix[row][col] = value;
  }
  print() {
    let str = "";
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        str += `${this.matrix[r][c]}\t`;
      }
      console.log(`${str}\n`);
      str = "";
    }
  }
  printColumn(col) {
    for (let r = 0; r < this.matrix.length; r++) {
      console.log(`${this.matrix[r][col]}\n`);
    }
  }
  printRow(row) {
    for (let c = 0; c < this.matrix[row].length; c++) {
      console.log(`${this.matrix[row][c]}\n`);
    }
  }

  findCoordinate(value) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        if (this.matrix[r][c] === value) return { x: c, y: r };
      }
    }
  }
}

export default Matrix;
