var assert = require("better-assert");

describe("pluralization", function () {
    "use strict";

    it("how about entry and entryItem?", function () {

        var entry = [
            {
                description: "Meal",
                amount: 500
            },
            {
                description: "Taxi",
                amount: 200
            }
        ];

        var total = 0;
        var entryItem;
        for (var index = 0; index < entry.length; index++) {
            entryItem = entry[index];
            total += entryItem.amount;
        }

        assert(total === 700);
    });

    it("how about entryList and entry?", function () {

        var entryList = [
            {
                description: "Meal",
                amount: 500
            },
            {
                description: "Taxi",
                amount: 200
            }
        ];

        var total = 0;
        var entry;
        for (var index = 0; index < entryList.length; index++) {
            entry = entryList[index];
            total += entry.amount;
        }

        assert(total === 700);
    });

    it("how about entries and entry?", function () {

        var entries = [
            {
                description: "Meal",
                amount: 500
            },
            {
                description: "Taxi",
                amount: 200
            }
        ];

        var total = 0;
        var entry;
        for (var index = 0; index < entries.length; index++) {
            entry = entries[index];
            total += entry.amount;
        }

        assert(total === 700);
    });

});
