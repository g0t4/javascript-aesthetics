/*eslint strict: 0, no-undef: 0, no-unused-vars: 0, no-redeclare: 0*/

// a bucket comes to mind as an abstraction for tracking storage
var bucket = new Bucket(40);
bucket.store(20);
bucket.remove(10);
console.log(bucket.getFreeSpace());

// but you're really working with warehouses
var warehouse = new Warehouse(40);
warehouse.store(20);
warehouse.remove(10);
console.log(warehouse.getFreeSpace());
