/*
Udemy DLL34 Reverse
*/

class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    reverse(){
      let current = this.head;
      let counter = 0;
      let temp;
      while(counter < this.length) {
        if(current === this.tail) {
          this.node.next = this.node.prev;
          this.node.prev = null;
          counter++;
          break;
        }
        if(current === this.head) {
          this.head.prev = this.head.next;
          this.head.next = null;
          counter++;
          continue;
        }
        temp = this.node.next;
        this.node.next = this.node.prev;
        this.node.prev = temp;
        current = this.node.prev;
        counter++;
      }
      temp = this.tail;
      this.tail = this.head;
      this.head = temp;
      return this;
    }
}