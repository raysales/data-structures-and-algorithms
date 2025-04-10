/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
class DisjointSet {
    constructor(numElems) {
        this.sizeArr = new Array(numElems).fill(1);
        this.parentArr = new Array(numElems).fill().map((_, idx) => idx);
    }
    
    findParent(node) { 
        if (this.parentArr[node] === node) return node;
        return this.parentArr[node] = this.findParent(this.parentArr[node]);
    }

    unionBySize(nodeU, nodeV) {
        let parentU = this.findParent(nodeU);
        let parentV = this.findParent(nodeV);
        if (parentU === parentV) return;
        if (this.sizeArr[parentU] < this.sizeArr[parentV]) {
            this.parentArr[parentU] = parentV;
            this.sizeArr[parentV] += this.sizeArr[parentU];
        } else {
            this.parentArr[parentV] = parentU;
            this.sizeArr[parentU] += this.sizeArr[parentV];
        }
    }   
}

var validPath = function(n, edges, source, destination) {
    const ds = new DisjointSet(n);
    // build components/sets
    for (const [u, v] of edges) {
        ds.unionBySize(u, v);
    }
    return ds.findParent(source) === ds.findParent(destination);
};