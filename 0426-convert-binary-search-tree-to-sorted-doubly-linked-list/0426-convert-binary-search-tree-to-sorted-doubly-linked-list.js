/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return
    
    // initialize head & tail to null
    let = null
    let tail = null
    
    // in order dfs
    const inOrderDfs = curNode => {
        if (!curNode) return
    
        //dfs left
        inOrderDfs(curNode.left)
        
        // if no tail yet, assign head to curNode
        if (!tail) head = curNode
        else {
            tail.right = curNode
            curNode.left = tail
        }
        tail = curNode
        
        // dfs right
        inOrderDfs(curNode.right)
        
    }
    
    inOrderDfs(root)
    
    // assign head's left to tail
    head.left = tail
    
    // assign tail's right to head
    tail.right = head
    
    return head
};