/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const domCntMap = new Map();
    
    // process each count & sub domain
    for (const cpdomain of cpdomains) {  // Changed 'dom' to 'cpdomain' to match variable name
        // split str into count & domain
        const [cntStr, dom] = cpdomain.split(' ');

        // convert cnt from str to int
        const cnt = parseInt(cntStr, 10);
        
        // split into subdomains
        const subdoms = dom.split('.');

        // slice arr to create all subdoms
        for (let i = 0; i < subdoms.length; i++) {
            let curSubDom = subdoms.slice(i).join('.');  // Fixed 'subdom' to 'subdoms'
        
            // get cur cnt of subdom
            let curCnt = domCntMap.get(curSubDom) || 0;

            // update cur subdom cnt as needed
            domCntMap.set(curSubDom, curCnt + cnt);
        }
    }
    
    // convert map entries back to arr of str
    return Array.from(domCntMap.entries()).map(
        ([dom, cnt]) => `${cnt} ${dom}`
    );
};