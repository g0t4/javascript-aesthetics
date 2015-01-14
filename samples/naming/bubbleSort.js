(function () {
    "use strict";

function comparator(a, b) {
    return a - b;
}

function bubSrt(arr, cmp) {
    cmp = cmp || comparator;
    var temp;
    for (var i = 0; i < arr.length; i += 1) {
        for (var j = i; j > 0; j -= 1) {
            if (cmp(arr[j], arr[j - 1]) < 0) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

bubSrt([4, 6, 2, 10, 1]);

})();

(function () {
    "use strict";

    function defaultDifference(a, b) {
        return a - b;
    }

    function bubbleSort(items, difference) {
        console.log(items);
        difference = difference || defaultDifference;
        for (var itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
            for (var currentIndex = itemIndex; currentIndex > 0; currentIndex -= 1) {
                var previousIndex = (currentIndex - 1);

                var currentItem = items[currentIndex];
                var previousItem = items[previousIndex];

                var currentIsLessThanPrevious = difference(currentItem, previousItem) < 0;
                if (currentIsLessThanPrevious) {
                    items[previousIndex] = currentItem;
                    items[currentIndex] = previousItem;
                    console.log("Swap " + previousItem + ", " + currentItem);
                    console.log(items);
                }
            }
        }
        return items;
    }

    bubbleSort([4, 6, 2, 10, 1]);
})();
