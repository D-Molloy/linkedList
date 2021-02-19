class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

// const newNode = new Node(4)
// newNode.next = new Node(9)
// newNode.next.next = new Node(1)
// console.log('newNode', newNode)

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }
  // adding a value to the end of the linked list
  push(val) {
    // create the new Node
    const newNode = new Node(val)

    // if the linked list is empty
    if (!this.head) {
      // set the new node as both the head and the tail
      this.head = newNode;
      this.tail = this.head
    } else {
      // adding a node to the end of existing linked list
      this.tail.next = newNode;
      // updating the linked list's tail property the newNode
      this.tail = newNode;
    }
    // increment the length
    this.length++

    // arbitrarily return the whole linked list
    return this
  }
  // removing a value to the end of the linked list
  pop() {
    // if the linked list is empty, dont return anything
    if (!this.head) return undefined

    //  iterate through the linked list until you find the tail of the linked list
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    // update the tail to the node prior to the tail, and sever the link to the previous tail
    this.tail = newTail
    this.tail.next = null
    // since a node has been removed, decrement the length of the linked list
    this.length--

    // if the last element in the linked list was removed, reset the linked list
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }
  // adding a value to the beginning of the linked list
  unshift(val) {
    // create the new node
    const newNode = new Node(val)

    // if nothing is currently in the head, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      // otherwise make the newNode the new head, and point the newNode to the previous head
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this

  }
  // removing a value from the beginning of the linked list
  shift() {
    // if there is nothing in the list, return undefined
    if (this.length === 0) return undefined
    // If there is content in the linked list SEVER THE CURRENT HEAD!
    let currentHead = this.head
    this.head = currentHead.next
    this.length--

    return currentHead
  }
  // display the linked list
  print() {
    console.log(JSON.stringify(this, null, 4))
  }
}

const linkedlist = new LinkedList()
linkedlist.push(8)
linkedlist.push(12)
linkedlist.push(10)
linkedlist.print()
linkedlist.pop()
console.log("------------------------")
linkedlist.unshift(100)
linkedlist.unshift(200)
linkedlist.print()
console.log("------------------------")
linkedlist.shift()
linkedlist.print()
