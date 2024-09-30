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
var reverseList = function(head) {
    /*
    if (!head || !head.next) return head;
/*
    1 > 2 > 3 > 4
    
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
*/
/*
    // either input was empty, reached the last node recur, or a single node
    if (head === null || head.next === null) return head
    
    let newHead = reverseList(head.next)
    let next = head.next  // rename next to front
    next.next = head
    head.next = null
    return newHead
*/
    const _reverseList = (head, prev) => {
        if (!head) return prev;
        
        const next = head.next;
        head.next = prev;
        return _reverseList(next, head);
    }
    //let prev = null
    return _reverseList(head, null)
};