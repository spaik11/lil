const Node = (value, next = null) => {
  return {
    value,
    next,
  }
}

const Lil = () => {
  return {
    head: null,

    values: function() {
      let newArr = [];
      let current = this.head;

      while (current.next) {
        newArr.push(current.value);
        current = current.next
      }
      newArr.push(current.value)

      return newArr;
    },

    addToStart: function(value) {
      let firstHead = this.head;

      if (this.head === null) {
        this.head = Node(value);
      } else {
        this.head = Node(value);
        this.head.next = firstHead;
      }
    },

    addToEnd: function(value) {
      if (this.head === null) {
        this.head = Node(value);
      } else if (this.head !== null) {
        let current = this.head;

        while (current.next) {
          current = current.next;
        }
        current.next = Node(value);
      }
    },

    removeFromStart: function() {
      let current = this.head;
      this.head = this.head.next;
      return current.value;
    },

    removeFromEnd: function() {
      let current = this.head;
      let previous = current;

      while(current.next) {
        previous = current;
        current = current.next;
      }
      
      previous.next = null;
      return current.value;
    },

    getAt: function(i) {
      if (this.head === null) {
        return null;
      } else {
        let newArr = this.values()
        return newArr[i]
      }
    },

    removeAt: function(i) {
      let current = this.head;
      
      if (this.head === null) {
        return null;
      } else {
        while (i > 1) {
          current = current.next;
          i--;
        }
        const removed = current.next;
        current.next = removed.next;
        return removed.value;
      }
    },
  }
}

module.exports = {
  Lil,
  Node,
}