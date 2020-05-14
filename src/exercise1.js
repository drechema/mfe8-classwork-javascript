
const head = ([first]) => first;
const tail = ([first,...remainder]) => remainder;
const init = (arr) => arr.slice(0,-1);
const last = (arr) => arr.slice(-1);

function exercise1() {
    console.log("Exercise 1:");
    var testArray = ["one","two","three","four"];
    console.log("testArray:", testArray)
    console.log("head(testArray):",head(testArray));
    console.log("tail(testArray):",tail(testArray));
    console.log("init(testArray):",init(testArray));
    console.log("last(testArray):",last(testArray));
}