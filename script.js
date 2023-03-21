// node factory function - which creates a new node object
function Node(value) {
    this.value = value;
    this.nextNode = null;
}

// linked list factory function - which creates a new linked list object
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// methods to link list prototype
// add a new node to the end of the linked list - creates new node object, then checks if the linked list is empty
LinkedList.prototype.append = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
};

LinkedList.prototype.size = function() {
    return this.length;
};

LinkedList.prototype.head = function() {
    return this.head;
};

LinkedList.prototype.tail = function() {
    return this.tail;
};

LinkedList.prototype.at = function(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }
    return node;
};
  
LinkedList.prototype.pop = function() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let newTail = current;
    while (current.nextNode) {
        newTail = current;
        current = current.nextNode;
    }
    this.tail = newTail;
    this.tail.nextNode = null;
    this.length--;
    if (this.length === 0) {
    this.head = null;
    this.tail = null;
    }
    return current;
};

LinkedList.prototype.contains = function(value) {
    let node = this.head;
    while (node) {
    if (node.value === value) {
    return true;
    }
    node = node.nextNode;
    }
    return false;
};

LinkedList.prototype.find = function(value) {
    let node = this.head;
    let index = 0;
    while (node) {
    if (node.value === value) {
    return index;
    }
    node = node.nextNode;
    index++;
    }
    return null;
};

LinkedList.prototype.toString = function() {
    let node = this.head;
    let str = "";
    while (node) {
    str += (${node.value}) -> ;
    node = node.nextNode;
    }
    str += "null";
    return str;
};

// thanks chatGPT