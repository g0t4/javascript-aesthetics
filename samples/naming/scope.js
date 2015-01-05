/*eslint no-unused-vars: 0, strict: 0 */

var books = [];

function getBook(id) {

    var book = books[id];

    book.getDescription = function () {
        var description = book.title + " by " + book.author;
        return description;
    };

    return book;

}