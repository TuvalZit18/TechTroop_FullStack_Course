class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findCommonParent(val1, val2) {
    if (val1 < this.value && val2 < this.value) {
      return this.leftChild
        ? this.leftChild.findCommonParent(val1, val2)
        : null;
    }

    if (val1 > this.value && val2 > this.value) {
      return this.rightChild
        ? this.rightChild.findCommonParent(val1, val2)
        : null;
    }

    return this.value;
  }
}
const bsTree = new BSNode("J");
bsTree.insertNode("H");
bsTree.insertNode("R");
bsTree.insertNode("E");
bsTree.insertNode("S");
bsTree.insertNode("P");
bsTree.insertNode("G");
bsTree.insertNode("B");
bsTree.insertNode("L");
bsTree.insertNode("Y");
bsTree.insertNode("I");

console.log(bsTree.findCommonParent("B", "I")); //should return "H"
console.log(bsTree.findCommonParent("B", "G")); //should return "E"
console.log(bsTree.findCommonParent("B", "L")); //should return "J"
console.log(bsTree.findCommonParent("L", "Y")); //should return "R"
console.log(bsTree.findCommonParent("E", "H")); //should return "J"
