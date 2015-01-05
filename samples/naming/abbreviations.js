describe("abbreviations", function () {
    "use strict";
    /*eslint no-unused-vars: 0 */

    it("how about this?", function () {

        var bk = {
            desc: "...",
            titl: "...",
            pgs: 150,
            auth: "John Doe",
            chps: 8,
            wc: 25000,
            px: 10.99,
            pub: "2014-01-01"
        };

    });

    it("or, this?", function () {

        var book = {
            description: "...",
            title: "...",
            pages: 150,
            author: "John Doe",
            chapters: 8,
            wordCount: 25000,
            price: 10.99,
            publicationDate: "2014-01-01"
        };
    });

    it("what if you don't see the data, say in documentation", function () {

        var bk = {
            desc: "",
            titl: "",
            pgs: "",
            auth: "",
            chps: "",
            wc: "",
            px: "",
            pub: ""
        };

    });

    it("mistakes can happen", function () {

        var bk = {
            desc: "",
            titl: "",
            pgs: "",
            auth: "",
            chps: "",
            wc: "",
            px: "",
            epx: "",
            pub: ""
        };

        function purch(cc, book) {
            var amt = book.px;
            cc.chrg(amt, book.titl);
        }

        // what if epx is the price for the ebook format?

    });

    it("ubiquitous abbreviations -> ISBN", function () {

        var book = {
            description: "...",
            title: "...",
            pages: 150,
            author: "John Doe",
            chapters: 8,
            wordCount: 25000,
            price: 10.99,
            publicationDate: "2014-01-01",
            isbn: "...",
            // versus
            internationalStandardBookNumber: "..."
        };

    });
});
