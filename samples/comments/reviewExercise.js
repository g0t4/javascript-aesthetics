
// compute teh weighted average
function weightedAvg(vs, ws){
    if (!Array.isArray(vs) || !Array.isArray(ws) || vs.length !== ws.length) return undefined; // need two arrays of same len

    // compute the sum of weight
    var s = 0;
    for (var i=0;i<ws.length;i++)s+=ws[i];

    // compute the sum of weight * value
    var v = 0;
    for (i=0;i<vs.length;i++){
        v += ws[i]*vs[i];
    }

    // wes - 12/29/2014 - there was a bug with divide by zero, fixed below
    // return v/s;

    // make sure we don't divide by zero
    return s === 0 ? undefined : v/s;
}

console.log(weightedAvg([5, 8], [1, 2]));