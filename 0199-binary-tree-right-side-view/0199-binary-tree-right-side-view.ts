/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    const output = [];
    dfs(root, 0, output);
    return output;
};

const dfs = (root: TreeNode | null, currentLevel: number, arrOFRightVal: number[]) => {
    if (root === null) {
        return;
    }

    if (currentLevel === arrOFRightVal.length) {
        arrOFRightVal.push(root.val);
    }

    if (root.right) {
        dfs(root.right, currentLevel + 1, arrOFRightVal);
    }

    if (root.left) {
        dfs(root.left, currentLevel + 1, arrOFRightVal);
    }

    return arrOFRightVal;
}

/*
Write a function to return the left/right view of a binary tree.

                10
          20          30
    40        50   60      70
  80   90   1   2 3  4   5     6 

[10, 20, 70, 80]
[10, 30, 40, 6]

              10
        20          30
  40        50   60      70
80   90   1   2 3  4   5  

q = [40, 50, 60, 70]
left = true
count = 4
result = [10, 30]

class Node {
  constructor(val) {
    this.val = val

  }
}


q = []
q.push(root)
result = []

var left = false

while (q.length > 0) {
  var count = q.length
  var currCount = count

  while (currCount-- > 0) {
    node = q[0]
    
    if (node.left != null) {
      q.push(node.left)
    }
    if (node.right != null) {
      q.push(node.right)
    }
    q.shift()

    if (left && currCount - 1 === count) {
      result.push(node.val)
    }
    else if (!left && currCount === 0) {
      result.push(node.val)
    }
  }

  left = !left
}

*/
/*
class Node {
  constructor(val) {
    this.val = val

  }
}

function leftRightView(root) {
  if (root == null) {
    return []
  }
  
  var q = []
  q.push(root)
  var result = []
  
  var left = true
  
  while (q.length > 0) {
    var count = q.length
    var currCount = count
  
    while (currCount-- > 0) {
      node = q[0]
  
      if (node.left != null) {
        q.push(node.left)
      }
      if (node.right != null) {
        q.push(node.right)
      }
      q.shift()
  
      if (left && currCount + 1 === count) {
        result.push(node.val)
      }
      else if (!left && currCount === 0) {
        result.push(node.val)
      }
    }
  
    left = !left
  }

  return result
}

root = new Node(10)
root.left = new Node(20)
//root.right = new Node(30)
root.left.left = new Node(40)
root.left.left.left = new Node(80)
root.left.left.right = new Node(90)
root.left.right = new Node(50)
root.left.right.left = new Node(1)
root.left.right.right = new Node(2)
/*root.right.left = new Node(60)
root.right.right = new Node(70)
root.right.left.left = new Node(3)
root.right.left.right = new Node(4)*/

/*
console.log(leftRightView(root))
*/
/*
              10
        20          30
  40        50   60      70
80   90   1   2 3  4   5     6 


              10
        20         
  40        50   
80   90   1   2 


[10,20,40,2]
*/