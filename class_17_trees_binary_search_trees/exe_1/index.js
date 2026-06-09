class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
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
  findNode(val) {
    if (!this.value) return false;
    if (this.value === val) return true;
    else {
      if (val > this.value) {
        return this.rightChild ? this.rightChild.findNode(val) : false;
      } else {
        return this.leftChild ? this.leftChild.findNode(val) : false;
      }
    }
  }
}
const bsTree = new BSNode();
bsTree.insertNode("H");
bsTree.insertNode("E");
bsTree.insertNode("S");
bsTree.insertNode("G");
bsTree.insertNode("L");
bsTree.insertNode("Y");
bsTree.insertNode("T");

//Use the following to test
console.log(`🚀 ~ bSTree.findNode("H") :`, bsTree.findNode("H"));
console.log(`🚀 ~ bSTree.findNode("G"):`, bsTree.findNode("G"));
console.log(`🚀 ~ bSTree.findNode("Z"):`, bsTree.findNode("Z"));
console.log(`🚀 ~ bSTree.findNode("F") :`, bsTree.findNode("F"));
console.log(`🚀 ~ bSTree.findNode("y") :`, bsTree.findNode("y"));
