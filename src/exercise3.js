/**
 * clone an object
 * @param source object to clone
 * @returns {object} source object cloned
 */
const clone = (source) => {
    return {...source};
}

/**
 * merge two objects
 * @param source object to merge
 * @param target object to merge
 * @returns {object} new object result of merge source and target
 */
const merge = (source,target) => {
    return {...target, ...source};
}

function exercise3() {
    console.log("Testing Exercise 3:");
    const testObject1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const testObject2 = { name: "Luisa", age: 31, married: true };
    console.log("testObject1:", testObject1);
    console.log("testObject2:", testObject2);
    console.log("clone(testObject1):",clone(testObject1));
    console.log("merge(testObject1,testObject2):",merge(testObject1,testObject2));
}