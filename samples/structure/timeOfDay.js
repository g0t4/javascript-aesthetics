var assert = require("better-assert");

describe("structure", function () {
    "use strict";

    it("should compute the proper day of week", function () {

        function timeOfDay(date) {
            if (date.getHours() < 6) {
                return "Too Early!";
            }
            else if (date.getHours() < 12) {
                return "Morning";
            }
            else if (date.getHours() < 16) {
                return "Afternoon";
            }
            else if (date.getHours() < 20) {
                return "Evening";
            }
            else {
                return "Night";
            }
        }

        assert(timeOfDay(new Date(2015, 1, 15, 18, 0)) === "Evening");

    });

});
