class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  //append(value) adds a new node containing value to the end of the list

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  //size returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  //head returns the first node in the list
  head() {
    let current = this.head;
    return current;
  }

  //tail returns the last node in the list
  tail() {
    let current = this.head;
    while (current) {
      current = current.nextNode;
    }
    return current;
  }

  //at(index) returns the node at the given index
  at(index) {
    if (index < 0) {
      return null;
    }
    let current = this.head;
    let count = 0;

    if (index === count) {
      return current;
    }
    current = current.nextNode;
    count++;
  }

  //pop removes the last element from the list

  pop() {
    if (!this.head) {
      return;
    }
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

  toString() {
    let string = "";
    let current = this.head;
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return string + "null";
  }

  //insertAt(value, index) that inserts a new node with the provided value at the given index

  insertAt(value, index) {
    let newNode = new Node(value);
    let current = this.head;
    let previousNode = null;
    let count = 0;
    if (index < 0) {
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    }
    while (current && count < index) {
      count++;
      previousNode = current;
      current = current.nextNode;
    }
    previousNode.nextNode = newNode;
    newNode.nextNode = current;
    return;
  }

  //removeAt(index) that removes the node at the given index

  removeAt(index) {
    let current = this.head;
    let count = 0;
    let previousNode = null;
    if (index < 0) {
      return;
    } else if (index === 0) {
      this.pop();
      return;
    }
    while (current && count < index) {
      count++;
      previousNode = current;
      current = current.nextNode;
    }
    if (!current) {
      return;
    }
    previousNode.nextNode = current.nextNode;
    return;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
