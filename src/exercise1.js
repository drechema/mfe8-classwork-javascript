
/**
 * Get first item from array
 * @param {array} array the array
 * @returns {any} first item from array
 */
const head = ([first]) => first;

/**
 * Get items from array except the first
 * @param {array} array the array
 * @returns {array} array with items from 1 to n
 */
const tail = ([first,...remainder]) => remainder;

/**
 * Get items from array except the last
 * @param {array} array the array
 * @returns {array} array with items from 0 to n-1
 */
const init = (arr) => arr.slice(0,-1);

/**
 * Get last item from array
 * @param {array} array the array
 * @returns {any} last item from array
 */
const last = (arr) => arr.slice(-1);

function exercise1() {
    console.log("Testing Exercise 1:");
    var testArray = ["one","two","three","four"];
    console.log("testArray:", testArray);
    console.log("head(testArray):",head(testArray));
    console.log("tail(testArray):",tail(testArray));
    console.log("init(testArray):",init(testArray));
    console.log("last(testArray):",last(testArray));
}