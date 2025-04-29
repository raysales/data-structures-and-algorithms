/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {

    // build adj list
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        adj[a].push([b, 1]);  // original edge
        adj[b].push([a, 0]);  // artificial edge (reversed)
    }

    // BFS
    const queue = [0]
    const visited = new Array(n).fill(false)
    visited[0] = true
    let output = 0

    while (queue.length > 0) {
        const u = queue.shift()
        for (const [v, direction] of adj[u]) {
            if (!visited[v]) {
                visited[v] = true
                if (direction === 1) {  // original edge u->v, needs to be flipped
                    output++
                }
                queue.push(v);
            }
        }
    }
    return output
}