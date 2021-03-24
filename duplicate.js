// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

/** Method 1: Using ES6 */
function duplicate(array) {
    return [...array, ...array];
};

duplicate([1,2,3,4,5]); // o/p: // [1,2,3,4,5,1,2,3,4,5]


/** Method 2: Using array concat */
function duplicate(array) {
    return array.concat(array);
};

duplicate([1,2,3,4,5]); // o/p: // [1,2,3,4,5,1,2,3,4,5]
