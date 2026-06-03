class UniqueArray {
  constructor() {
    this.uniques = {};
    this.uniquesLength = 0;
    this.allowed = [
      "string",
      "number",
      "bigint",
      "boolean",
      "undefined",
      "symbol",
      "object",
    ];
  }
  add(item) {
    let type = typeof item;
    if (!this.allowed.includes(type)) return;
    if (type === "object" && item === null) return;
    if (this.exists(JSON.stringify(item))) return;
    this.uniques[JSON.stringify(item)] = this.uniquesLength++;
  }
  showAll() {
    console.log(Object.keys(this.uniques));
  }
  exists(item) {
    return this.uniques[JSON.stringify(item)] !== undefined ? true : false;
  }
  get(index) {
    let entry = Object.entries(this.uniques).find((item) => item[1] === index);

    return entry ? entry[0] : -1;
  }

  annihilate() {
    this.uniques = {};
    this.uniquesLength = 0;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
uniqueStuff.showAll(); //prints ["toy","poster","hydrogen"]
