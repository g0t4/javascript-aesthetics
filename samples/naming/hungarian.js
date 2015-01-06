/*eslint strict: 0, no-undef: 0, no-unused-vars: 0, no-redeclare: 0*/

// what are the types of these three variables likely to be?

var price;
var name;
var complete;

//

var price = 1.05;
var nPrice = 1.05;
var numberPrice = 1.05;

var name = "Jane";
var sName = "Jane";
var strName = "Jane";
var stringName = "Jane";

var complete = true;
var bComplete = true;
var boolComplete = true;

var books = [];
var aBook = [];
var arrBook = [];
var bookArray = [];

// sometimes type is not precise
var bookList = [];
var book_list = [];

// show that modern editors can navigate to a definition if you aren't sure
// when you aren't sure, consider a new name

var complete = true;

function lengthyFunction() {
    /*
     Does a whole lot of stuff
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     .
     */

    console.log("The project is completed: " + complete);
}