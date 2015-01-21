function stdDev(arr){
    if ((!Array.isArray(arr) || arr.length === 0)){
        return undefined; // we cannot compute the standard deviation if we don't have an array of numbers, so return undefined in this situation, or if the array is empty
    }
    var s = 0;
    for (var i = 0; i < arr.length; i++){
        s += arr[i]; // sum up the items in the array
    }
    var m = s / arr.length; // calculate the mean of the items in the array
    var v = 0;
    for (i = 0; i < arr.length; i++){
        v = v + Math.pow(arr[i] - m, 2) / arr.length; // sum up the difference between the current item and the mean, squared and divided by the number of items in the array, this produces a variance
    }
    return Math.sqrt(v); // and then the last thing we need to do is to return the square root of the variance
}