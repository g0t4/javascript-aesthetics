/**
 * Calculate the standard deviation of a set of numbers
 * @param {number[]} numbers numbers to return the standard deviation of
 * @returns {number|undefined} - if numbers is not an array, or is empty, returns undefined
 */
function standardDeviation(numbers){
    if ((!Array.isArray(numbers) || numbers.length === 0)){
        return undefined;
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    var mean = sum / numbers.length;

    var sumOfDifferencesSquared = 0;
    for (i = 0; i < numbers.length; i++){
        var difference = numbers[i] - mean;
        sumOfDifferencesSquared += Math.pow(difference, 2);
    }
    var variance = sumOfDifferencesSquared / numbers.length;

    return Math.sqrt(variance);
}

standardDeviation([1, 2, 3]);

// problem:
standardDeviation(1);