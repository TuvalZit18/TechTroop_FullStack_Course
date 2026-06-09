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
  maxLeftChild(node) {
    if (node.rightChild !== null) {
      return this.maxLeftChild(node.rightChild);
    }
    return node;
  }
  removeNode(parent, val) {
    if (val < this.value && this.leftChild !== null) {
      return this.leftChild.removeNode(this, val);
    } else if (val < this.value) {
      return false;
    } else if (val > this.value && this.rightChild !== null) {
      return this.rightChild.removeNode(this, val);
    } else if (val > this.value) {
      return false;
    } else if (
      this.leftChild === null &&
      this.rightChild === null &&
      parent.rightChild === this
    ) {
      parent.rightChild = null;
      return parent;
    } else if (
      this.leftChild === null &&
      this.rightChild === null &&
      parent.leftChild === this
    ) {
      parent.leftChild = null;
      return parent;
    } else if (
      this.leftChild === null &&
      this.rightChild !== null &&
      parent.rightChild === this
    ) {
      parent.rightChild = this.rightChild;
      return parent;
    } else if (
      this.leftChild === null &&
      this.rightChild !== null &&
      parent.leftChild === this
    ) {
      parent.leftChild = this.rightChild;
      return parent;
    } else if (
      this.leftChild !== null &&
      this.rightChild === null &&
      parent.rightChild === this
    ) {
      parent.rightChild = this.leftChild;
      return parent;
    } else if (
      this.leftChild !== null &&
      this.rightChild === null &&
      parent.leftChild === this
    ) {
      parent.leftChild = this.leftChild;
      return parent;
    } else {
      let maxLeftValue = this.maxLeftChild(this.leftChild).value;
      this.value = maxLeftValue;
      return this.leftChild.removeNode(this, maxLeftValue);
    }
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
