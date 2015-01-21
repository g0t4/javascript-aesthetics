function calculateAverage(numbers){
    var sum = 0;
    for (var index = 0; index < numbers.length; index++){
        sum += numbers[index];
    }
    var mean = sum / numbers.length;
    return mean;
}

function calculateVariance(mean, numbers){
    var variance = 0;
    for (var index = 0; index < numbers.length; index++){
        variance = variance + Math.pow(numbers[index] - mean, 2) / numbers.length;
    }
    return variance;
}

function stdDev(numbers){
    var notAnArrayOfNumbers = !Array.isArray(numbers);
    var numbersIsEmpty = numbers.length === 0;
    if (notAnArrayOfNumbers || numbersIsEmpty){
        return undefined;
    }

    var mean = calculateAverage(numbers);

    var variance = calculateVariance(mean, numbers);

    return Math.sqrt(variance);
}

console.log(stdDev([1, 2, 3]));
