/**
 * Concatenate two arrays
 * @param {array} arr1 first array
 * @param {array} arr1 second array
 * @returns {array} concatenated array
 */
const concat = (arr1, arr2) => [...arr1,...arr2];

/**
 * Concatenate several arrays
 * @param arrs any number of arrays
 * @returns {array} concatenated array
 */
const concat_multiple = (...arrs) => {
    let r = [];
    [...arrs].forEach(item => {
        r = [...r,...item]
    });
    return r;
};

function exercise2() {
    console.log("Testing Exercise 2:");
    var testArray1 = ["one","two","three","four"];
    var testArray2 = ["five","six","seven","eight"];
    var testArray3 = ["nine","ten"];
    console.log("testArray1:", testArray1);
    console.log("testArray2:", testArray2);
    console.log("testArray3:", testArray3);
    console.log("concat(testArray1,testArray2):",concat(testArray1,testArray2));
    console.log("concat(testArray1,testArray2,testArray3):",concat_multiple(testArray1,testArray2,testArray3));
}