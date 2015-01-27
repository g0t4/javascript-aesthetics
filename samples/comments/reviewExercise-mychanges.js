// Compute the weighted average with an array of values and corresponding weights.
function weightedAverage(values, weights){
    var notTwoArraysOfSameLength =
        !Array.isArray(values)
        || !Array.isArray(weights)
        || values.length !== weights.length;
    if (notTwoArraysOfSameLength){
        return undefined;
    }

    var totalWeight = sum(weights);

    var totalWeightedValue = 0;
    for (var i = 0; i < values.length; i++){
        totalWeightedValue += weights[i] * values[i];
    }

    if (totalWeight === 0){
        return undefined;
    }
    return totalWeightedValue / totalWeight;
}