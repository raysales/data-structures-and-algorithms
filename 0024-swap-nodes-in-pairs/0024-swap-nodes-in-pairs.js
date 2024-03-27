/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
preHead    = pr
prevNode   = p
head       = h
firstNode  = f
secondNode = s

 pr     h
 -1 ->  1 ->  2  ->  3  ->  4
  p     f     s
  p(-1) ----> s(2)           -1 next 2
      f(1) ------>   3        1 next 3
      f(1) <- s(2)            2 next 1
 -1  ------>  2
        1 ------->   3    this has to occur before losing ref to 2
  2 --> 1                 now we can change 2's next
  
  p(-1) = f(1)
        h  =         3
     
 pr&p    s    f&h
 -1 -->  2 --> 1 --> 3 --> 4    
               p     h        reassign p to f then h to f.next which is 3
               
                     f     s  restart while, so reasign f to h then s to h.next
*/
var swapPairs = function(head) {
    let preHead = new ListNode(-1)
    preHead.next = head
    let prevNode = preHead
    let firstNode
    let secondNode
    
    while (head !== null && head.next !== null) {
        // assign 1st & 2nd node accordingly
        firstNode = head
        secondNode = head.next
        
        // assign next ptrs for prev to sec, first to sec.next, sec to first in           // this order since we don't want to lose sec's reference
        prevNode.next = secondNode
        firstNode.next = secondNode.next
        secondNode.next = firstNode
        
        // reassign prev to last node in pair which is now first or head
        prevNode = firstNode
        // reassign head to first or head's next
        head = head.next
    }
    return preHead.next
};