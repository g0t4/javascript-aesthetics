describe("meaning", function () {
    "use strict";

    it("how about this?", function(){

        function compoundMonthlyReturn(data) {
            var total = 1.0;
            for (var i = 0; i < data.length; i++)
            {
                total *= 1 + data[i];
            }

            return data.length === 0 ? NaN
                : Math.pow(total, 1.0 / data.length) - 1.0;
        }

        compoundMonthlyReturn([0.02, 0.03, 0.035]);

    });

    it("or this?", function(){

        function compoundMonthlyReturn(monthlyReturns) {
            var compoundReturn = 1.0;
            for (var i = 0; i < monthlyReturns.length; i++)
            {
                compoundReturn *= 1 + monthlyReturns[i];
            }

            return monthlyReturns.length === 0 ? NaN
                : Math.pow(compoundReturn, 1.0 / monthlyReturns.length) - 1.0;
        }

        compoundMonthlyReturn([0.02, 0.03, 0.035]);

    });

});
