class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor( head = null, tail = null ) {
    this.head = head;
    this.tail = tail;
    //this.size = size;
  }

  // check if the list is empty
  isEmpty() {
    return this.head === null
    console.log( isEmpty() )
  }
  
  setHead( value ) {
    const newNode = new Node( value )
    if ( this.isEmpty() ) {
      this.head = newNode
      this.tail = newNode
      //console.log(`this.head = ${this.head.value}, this.tail = ${this.tail.value}`);
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    console.log( `setHead( ${value} )`)
  }

  setTail( value ) {
    const newNode = new Node(value)
    if ( this.isEmpty() ) {
      this.head = newNode
      this.tail = newNode
    } else { 
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    console.log( `setTail( ${value} )`)
  }

  // removes the item at front of the doubly linked list and return 
  popFront() {
    if ( this.isEmpty() ) {
      console.log( 'popFront() Doubly LL is empty' )
      return
    }
    let nextNode = this.head.next
    
    if ( nextNode !== null ) nextNode.prev = null
    
    let item = this.head.value
    this.head = nextNode
    console.log( `popFront() item = ${item}`)
    return item
  }
  
  // remove the item at the end of the list and return 
  popBack() {
    if ( this.isEmpty() ) {
      console.log( 'popBack() Doubly LL is empty' )
      return
    }
    let item = this.tail.value
    let prev = this.tail.prev

    if ( prev !== null ) prev.next = null

    this.tail.prev = null
    this.tail = prev
    console.log( `popBack() item = ${item}`)
    return item
  }

  find( key ) {
    if ( this.isEmpty() ) {
      console.log( `find( ${key} ) - Doubly LL is empty` )
      return false
    }
    let curr = this.head
    while ( curr !== null && curr.value !== key ) curr = curr.next

    if ( curr === null ) {
      console.log( `find( ${key} ) = false `)
      return false
    }
    console.log( `find( ${key} ) = true`)
    return true
  }

  insertBefore( key, value ) {
    const newNode = new Node(value);

    // find the position of key
    let current = this.head;
    while ( current !== null && current.value != key ) {
      //console.log('inside insert_after while b4 = ', curr.data )      
      current = current.next;
      //console.log('inside insert_after while b = ', curr.data)  
    }

    if ( current === null ) {
      console.log( `insertBefore key = ${key} not found` );
      return;
    }

    // Head position
    if ( current.prev === null ) {
      current.prev = newNode;
      newNode.next = current;
      this.head = newNode; 
    } else {      
      const prevNode = current.prev;
      current.prev = newNode;
      newNode.prev = prevNode;
      newNode.next = current;
      prevNode.next = newNode;
    }
    console.log( `insertBefore( ${key}, ${value} )`)
  }
  
  insertAfter( key, value ) {
    const newNode = new Node(value);

    // find the position of key
    let current = this.head;
    while ( current !== null && current.value != key ) {
      //console.log('inside insert_after while b4 = ', curr.data )      
      current = current.next;
      //console.log('inside insert_after while b = ', curr.data)  
    }

    if ( current === null ) {
      console.log( `insertAfter key = ${key} not found` );
      return;
    }
      
    // Tail position
    if ( current.next === null ) {
      current.next = newNode;
      newNode.prev = current;
      this.tail = newNode; 
    } else {      
      const nextNode = current.next;
      current.next = newNode;
      newNode.prev = current;
      newNode.next = nextNode;
      nextNode.prev = newNode;
    }
    console.log( `insertAfter( ${key}, ${value} )`)
  }

  remove( key ) {
    if ( this.isEmpty() ) {
      console.log( 'Doubly LL is empty' )
      return
    }
    // find the position of the key
    let curr = this.head

    while ( curr !== null && curr.value !== key ) { curr = curr.next }

    if ( curr === null ) {
      console.log( `remove( ${key} ) not found`)
      return
    }

    // if curr is head, delete the head
    if ( curr.prev === null ) this.popFront() 
    
    else if ( curr.next === null ) this.popBack()
    
    else { 
      //anywhere between first and last node
      let next_node = curr.next
      let prev_node = curr.prev

      prev_node.next = next_node
      next_node.prev = prev_node

      curr.next = null 
      curr.prev = null
      curr = null
    }

    console.log( `remove(${ key } )` )
  }

  /* 
  reverseRec(head) {
    if (!head || !head.next) return head;

    let rest = this.reverseRec(head.next);

    head.next.next = head;
    delete head.next;
    return rest;
  }
  */

  reverseDll() {
    if ( this.head === null ) {
      print("Doubly LL is empty")
      return 
    }
    let current = this.head
    let temp
    while ( current ) {
      temp = current.next
      current.next = current.prev
      current.prev = temp
      current = temp
    }
    temp = this.head
    this.head = this.tail
    this.tail = temp
    console.log( `reverseDll()`)
  }

  reverseDll2() {
    if ( this.head === null ) {
      print("Doubly LL is empty")
      return 
    }
    let ptr1 = this.head
    let ptr2 = ptr1.next
    ptr1.next = null
    ptr1.prev = ptr2
    this.tail = ptr1
    while ( ptr2 !== null ) {
      ptr2.prev = ptr2.next
      ptr2.next = ptr1
      ptr1 = ptr2
      ptr2 = ptr2.prev
    this.head = ptr1
    }
    console.log( `reverseDll2()`)
  }
  	
print () {
  let str = ""
  let curr = this.head
  while(curr) {
    str += curr.value + " -> "
    curr = curr.next
  }
  str += "null"
  return str
  console.log(str)
}

  toString() {
    const toPrint = [];
    let currNode = this.head;

    while (currNode) {
      toPrint.push(currNode.value);
      currNode = currNode.next;
    }

    return toPrint.join(" -> ");
  }
  
}

const dll = new DoublyLinkedList();
dll.insertBefore(10,5)
dll.insertAfter(40, 50)
dll.setHead( 10 )
dll.setTail( 40 )
dll.insertBefore(10,5)
dll.insertAfter(40, 50)
console.log( dll.print() );
dll.reverseDll( );
console.log( dll.print() );
dll.reverseDll2( );
console.log( dll.print() );
dll.remove( 55 );
console.log( dll.print() );
dll.find( 11 );
