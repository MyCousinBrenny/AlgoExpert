// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function shiftLinkedList(head, k) {
    let i = 1;
    let listTail = head;
    while (listTail.next != null) {
      listTail = listTail.next;
      i++
    }
    let newTailOffset = Math.abs(k) % i;
    if(newTailOffset == 0) {
      return head;
    }
    let newTailPosition = k > 0 ? i - newTailOffset : newTailOffset;
    let newTail = head;
    for (let j = 1; j < newTailPosition; j++){
      newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    listTail.next = head;
  
    return newHead;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.shiftLinkedList = shiftLinkedList;