/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {

    const numNodes = colors.length;
    const adj = new Array(numNodes).fill().map(() => []);

    // ==== GRAPH CONSTRUCTION ====
    // Build adjacency list: parent -> children mappings
    for (const [parNode, childNode] of edges) {
        adj[parNode].push(childNode);
    }

    // ==== VISITED STATES ====
    // 0 = unvisited, 1 = visiting (current path), 2 = fully processed
    const visited = new Array(numNodes).fill(0);

    // ==== COLOR COUNT MATRIX ====
    // colorCounts[parNode][curColorIdx] = max count of color in paths ending at parNode
    const colorCounts = new Array(numNodes).fill().map(() => new Array(26).fill(0));
    let globalMax = 0;

    // ==== POST-ORDER DFS ====
    const dfs = (parNode) => {
        // [1] CYCLE DETECTION
        if (visited[parNode] === 1) return false; // Back edge → cycle detected
        if (visited[parNode] === 2) return true;  // Already processed
        
        visited[parNode] = 1; // Mark as currently being visited

        // [2] INITIALIZE PARENT'S OWN COLOR COUNT
        const parColorIdx = colors.charCodeAt(parNode) - 97; // 'a'=0, ..., 'z'=25
        colorCounts[parNode][parColorIdx] = 1; // At least 1 for the parent itself

        // [3] PROCESS ALL CHILDREN FIRST (POST-ORDER)
        for (const childNode of adj[parNode]) {
            if (!dfs(childNode)) return false; // Propagate cycle detection if found
            
            // [4] MERGE CHILD'S COLOR COUNTS INTO PARENT
            for (let curColorIdx = 0; curColorIdx < 26; curColorIdx++) {
                // Calculate merged count:
                // - Child's count for curColorIdx
                // - Plus 1 if parent's color matches current color bucket
                const mergedCount = colorCounts[childNode][curColorIdx] + 
                                   (curColorIdx === parColorIdx ? 1 : 0);
                
                // Update parent's count to be the maximum between:
                // - Its current count for curColorIdx
                // - The new mergedCount
                colorCounts[parNode][curColorIdx] = Math.max(
                    colorCounts[parNode][curColorIdx], 
                    mergedCount
                );
            }
        }

        // [5] UPDATE GLOBAL MAXIMUM COLOR COUNT
        globalMax = Math.max(globalMax, ...colorCounts[parNode]);

        visited[parNode] = 2; // Mark as fully processed
        return true;
    };

    // ==== EXECUTE DFS ON ALL NODES ====
    for (let node = 0; node < numNodes; node++) {
        if (!dfs(node)) return -1; // Return -1 if cycle detected
    }
    
    return globalMax; // Largest color value in any path
};