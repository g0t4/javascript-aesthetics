describe("meaning", function () {
    "use strict";

    it("how about this?", function () {

        function compoundMonthlyReturn(data) {
            var total = 1.0;
            for (var index = 0; index < data.length; index++) {
                total *= 1 + data[index];
            }

            return data.length === 0 ? NaN
                : Math.pow(total, 1.0 / data.length) - 1.0;
        }

        compoundMonthlyReturn([0.02, 0.03, 0.035]);

    });

    it("or this?", function () {

        function compoundMonthlyReturn(monthlyReturns) {
            var compoundReturn = 1.0;
            for (var index = 0; index < monthlyReturns.length; index++) {
                compoundReturn *= 1 + monthlyReturns[index];
            }

            return monthlyReturns.length === 0 ? NaN
                : Math.pow(compoundReturn, 1.0 / monthlyReturns.length) - 1.0;
        }

        compoundMonthlyReturn([0.02, 0.03, 0.035]);

    });

    it("generic sum calculation", function () {

        var numbers = [1.00, 2.07, 3.05];

        var sum = 0.0;
        for (var index = 0; index < numbers.length; index++) {
            sum += numbers[index];
        }

        console.log("The total price is: " + sum.toFixed(2));

    });

    it("coupled sum calculation, though names are meaningful", function () {

        var prices = [1.00, 2.07, 3.05];

        var totalPrice = 0.0;
        for (var index = 0; index < prices.length; index++) {
            totalPrice += prices[index];
        }

        console.log("The total price is: " + totalPrice.toFixed(2));

    });

    it("sloppy naming", function () {

        var things = [1.00, 2.07, 3.05];

        var result = 0.0;
        for (var i = 0; i < things.length; i++) {
            result += things[i];
        }

        console.log("The total price is: " + result.toFixed(2));

    });

});
