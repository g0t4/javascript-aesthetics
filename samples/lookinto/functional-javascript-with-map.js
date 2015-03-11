it("can be done with a for loop", function (){

    var numbers = [1, 2, 3];

    var timesTwo = [];
    for (var index = 0; index < numbers.length; index++){
        timesTwo[index] = numbers[index] * 2;
    }

    expect(timesTwo).toEqual([2, 4, 6]);

});

it("but can be done elegantly with map", function (){

    var numbers = [1, 2, 3];

    var timesTwo = numbers.map(function (number){
        return number * 2;
    });

    expect(timesTwo).toEqual([2, 4, 6]);

});