function standardDeviation(numbers){
    if ((!Array.isArray(numbers) || numbers.length === 0)){
        return undefined;
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    var mean = sum / numbers.length;

    // First we compute the sum of the differences squared,
    // so variance isn't really a variance at this point
    var variance = 0;
    for (i = 0; i < numbers.length; i++){
        var difference = numbers[i] - mean;
        variance += Math.pow(difference, 2);
    }
    // then we divide by the number of numbers to get the variance
    variance = variance / numbers.length;

    return Math.sqrt(variance);
}