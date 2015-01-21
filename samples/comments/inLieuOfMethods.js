function stdDev(numbers){
    var notAnArrayOfNumbers = !Array.isArray(numbers);
    var numbersIsEmpty = numbers.length === 0;
    if (notAnArrayOfNumbers || numbersIsEmpty){
        return undefined;
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    var mean = sum / numbers.length;

    var variance = 0;
    for (i = 0; i < numbers.length; i++){
        variance = variance + Math.pow(numbers[i] - mean, 2) / numbers.length;
    }

    return Math.sqrt(variance);
}