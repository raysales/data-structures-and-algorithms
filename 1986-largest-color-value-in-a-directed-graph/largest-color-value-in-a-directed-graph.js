/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {

    // init # of nodes
    const n = colors.length;
    
    // build adjacency list and in-degree array
    const adj = Array.from({ length: n }, () => []);
    const inDegree = new Array(n).fill(0);
    
    // populate adjacency list and in-degree
    for (const [u, v] of edges) {
        adj[u].push(v);
        inDegree[v]++;
    }
    
    // init queue with nodes having zero in-degree
    const queue = [];
    // init color counts for each node (26 letters)
    const colorCounts = Array.from({ length: n }, () => new Array(26).fill(0));
    
    // loop through all nodes to initialize the topo sort queue
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            // set the node's own color count to 1
            const colorIdx = colors.charCodeAt(i) - 'a'.charCodeAt(0);
            colorCounts[i][colorIdx] = 1;
        }
    }
    
    let processed = 0; // track number of processed nodes
    let maxColorValue = 0; // track the max color value found
    
    // process nodes in topo order
    while (queue.length > 0) {
        const u = queue.shift();
        processed++;
        
        // update maxColorValue w/ the max count in curf node's color counts
        const currentMax = Math.max(...colorCounts[u]);
        maxColorValue = Math.max(maxColorValue, currentMax);
        
        // Propagate color counts to neighbors
        for (const v of adj[u]) {
            const colorIdx = colors.charCodeAt(v) - 'a'.charCodeAt(0);
            for (let c = 0; c < 26; c++) {
                // New count is predecessor's count plus 1 if same color
                const newCount = colorCounts[u][c] + (c === colorIdx ? 1 : 0);
                // Update neighbor's count if new count is higher
                if (newCount > colorCounts[v][c]) {
                    colorCounts[v][c] = newCount;
                }
            }
            
            // decrement in-degree and add to queue if in-degree becomes 0
            inDegree[v]--;
            if (inDegree[v] === 0) {
                queue.push(v);
            }
        }
    }
    
    // if all nodes processed, return maxColorValue else, return -1 (cycle detected)
    return processed === n ? maxColorValue : -1;
};