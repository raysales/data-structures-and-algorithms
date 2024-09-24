/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
//var maxProbability = function(n, edges, succProb, start_node, end_node) {
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    enqueue(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[parentIndex][0] < this.heap[index][0]) {
            this.swap(parentIndex, index);
            this.bubbleUp(parentIndex);
        }
    }

    bubbleDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.heap[leftChild][0] > this.heap[largest][0]) {
            largest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild][0] > this.heap[largest][0]) {
            largest = rightChild;
        }

        if (largest !== index) {
            this.swap(largest, index);
            this.bubbleDown(largest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Main function using the MaxHeap and a Set for visited nodes
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    // Step 1: Build the graph as an adjacency list with probabilities
    const graph = new Map();
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const prob = succProb[i];
        
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        
        graph.get(u).push([v, prob]);
        graph.get(v).push([u, prob]);
    }
    
    // Step 2: Create a max heap
    const maxHeap = new MaxHeap(); // Store tuples [probability, node]
    
    // Step 3: Initialize the heap with the start node and probability of 1
    maxHeap.enqueue([1, start_node]);
    
    // Track visited nodes
    const visited = new Set();
    
    // Keep track of the maximum probability to reach each node
    const probabilities = Array(n).fill(0);
    probabilities[start_node] = 1; // Start node has 100% probability to reach itself
    
    // Step 5: Dijkstra's-like traversal
    while (!maxHeap.isEmpty()) {
        const [curProb, curNode] = maxHeap.dequeue(); // Get the current node and its probability
        
        // If we reached the end node, return the probability
        if (curNode === end_node) return curProb;
        
        // Mark the node as visited
        if (visited.has(curNode)) continue;
        visited.add(curNode);
        
        // Visit all neighbors
        if (graph.has(curNode)) {
            for (const [neighbor, edgeProb] of graph.get(curNode)) {
                const newProb = curProb * edgeProb;
                
                // If we found a higher probability for this neighbor, update and enqueue
                if (newProb > probabilities[neighbor]) {
                    probabilities[neighbor] = newProb;
                    maxHeap.enqueue([newProb, neighbor]);
                }
            }
        }
    }
    
    // If we exit the loop without finding the end node, return 0
    return 0;
};
