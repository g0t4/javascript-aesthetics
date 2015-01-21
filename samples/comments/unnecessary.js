function stdDev(arr){
    if ((!Array.isArray(arr) || arr.length === 0)){
        return undefined;
    }
    // declare s
    var s = 0;
    // declare i and iterate through array
    for (var i = 0; i < arr.length; i++){
        // add current item to s
        s += arr[i];
    }
    // more declarations
    var m = s / arr.length;
    var v = 0;
    // iterate a second time through array
    for (i = 0; i < arr.length; i++){
        v = v + Math.pow(arr[i] - m, 2) / arr.length;
    }
    // return square root
    return Math.sqrt(v);
}