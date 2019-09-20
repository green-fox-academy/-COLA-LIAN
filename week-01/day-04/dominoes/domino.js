class Domino {
  constructor(valueA, valueB) {
    this.values = [valueA, valueB];
  }

  toString() {
    return `[${this.values[0]}|${this.values[1]}]`;
  }
}

module.exports = Domino;

// let d = new Domino(3,4);
// console.info(d.toString());