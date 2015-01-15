var assert = require("better-assert");

describe("structure", function () {
    "use strict";
    /*eslint curly: 0, space-infix-ops: 0, no-multi-spaces: 0, semi: 0, no-spaced-func: 0 */

    it("should compute the proper time of day", function () {

        function timeOfDay(
            date){
            if (date.getHours()<12&&date.getHours()>5){
                return "Morning"}
               else
                if(date .getHours ()<6)
                        return "Too Early!";
            else    if    (       date. getHours()    <      16)  {
                return "Afternoon";
        }
              else if ((date.getHours () <   20) ) return "Evening";
                else return "Night"
        }

        assert(timeOfDay(new Date(2015, 1, 15, 18, 0)) === "Evening");
        assert(timeOfDay(new Date(2015, 1, 15, 21, 0)) === "Night");
        assert(timeOfDay(new Date(2015, 1, 15, 5, 0)) === "Too Early!");
        assert(timeOfDay(new Date(2015, 1, 15, 10, 0)) === "Morning");

    });


    function manualCleanupFinalResultDuringRecording(){

        // keeping this around to show that even manual cleanup can miss things

        function timeOfDay(date){
            if (date.getHours() < 12 && date.getHours() > 5){
                return "Morning"
            }
            else if (date.getHours () < 6) {
                return "Too Early!";
            }
            else if (date.getHours() < 16)  {
                return "Afternoon";
            }
            else if ((date.getHours() < 20) ) {
                return "Evening";
            }
            else return "Night"
        }

    }
});
