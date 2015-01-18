var assert = require("better-assert");

describe("structure", function (){
    "use strict";
    /*eslint curly: 0, space-infix-ops: 0, no-multi-spaces: 0, semi: 0, no-spaced-func: 0 */

    function sd(arr){
       if (!Array.isArray(arr)||arr.length===0)return undefined;
      var s =0 ;
       for (var i= 0 ; i<arr.length;  i++) s   +=  arr[i];
         var m= s / arr.length;
          var v =0 ;
      for (i =0; i <arr.length;i++)
         v =v+ Math .pow(arr[i]- m,2) ;
          v= v/ arr. length;
         return    Math.sqrt(v);
    }

    it("standard deviation of no numbers is undefined", function (){
        var noNumbers = [];
        assert(sd(noNumbers) === undefined);
    });

    it("standard deviation of something that isn't an array is undefined", function (){
        assert(sd({}) === undefined);
    });

    it("standard deviation of 1 number is 0", function (){
        var noNumbers = [1];
        assert(sd(noNumbers) === 0);
    });

    it("standard deviation calculates correctly with 3 numbers", function (){
        var numbers = [2, 3, 10];
        assert(sd(numbers) === Math.sqrt(38 / 3));
    });

});
