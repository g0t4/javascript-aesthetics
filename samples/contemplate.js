// Scroll past these in demos
/*eslint strict: 0, no-unused-vars: 0, no-unused-expressions:0, eol-last: 0 */
//noinspection JSUnusedGlobalSymbols






function compoundMonthlyReturn(monthlyReturns) {
    var compoundReturn = 1.0;
    for (var i = 0; i < monthlyReturns.length; i++)
    {
        compoundReturn *= 1 + monthlyReturns[i];
    }

    return monthlyReturns.length === 0 ? NaN
        : Math.pow(compoundReturn, 1.0 / monthlyReturns.length) - 1.0;
}
















