/*eslint no-unused-vars: 0 */
var assert = require("better-assert");

function specificity() {
    "use strict";

    // vague
    var data = [];
    var items = [];

    var rows;
    var cols;

    var info;

    // frequently used
    var date;
    var publicationDate;
    var birthDate;

    var time;
    var runAt;
    var ranAt;
    var startTime;

    var timestamp;
    var transactionTimestamp;
    var transactedAt;

    var type;
    var gender;
    var genre;

    var price;
    var totalPrice;
    var pricePerPound;
    var pricePerUnit;
}

it("Consider context, may be redundant", function () {
    "use strict";

    var transactionTimestamp;

    var transaction = {};
    transaction.transactionTimestamp = "2015-01-01";

    transaction.timestamp = "2015-01-01";
    transaction.reviewTimestamp = "2015-01-05";

    var person = {};
    person.birthDate = "1980-01-01";
    person.employedDate = "2000-01-01";

});
