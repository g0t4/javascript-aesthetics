/*eslint strict: 0, no-undef: 0, no-unused-vars: 0, no-redeclare: 0*/
var assert = require("better-assert");

(function explicit() {

    function Warehouse(capacity) {

        this.stored = 0;
        this.capacity = capacity;

        this.getFreeSpace = function () {
            return capacity - this.stored;
        };

        this.store = function (amount) {
            if (capacity < amount + this.stored) {
                this.stored = capacity;
                return;
            }
            this.stored += amount;
        };

        this.remove = function (amount) {
            if (this.stored < amount) {
                this.stored = 0;
                return;
            }
            this.stored -= amount;
        };
    }

    var warehouse = new Warehouse(40);
    warehouse.store(30);
    assert(warehouse.getFreeSpace() === 10);
    warehouse.remove(5);
    assert(warehouse.getFreeSpace() === 15);

})();
