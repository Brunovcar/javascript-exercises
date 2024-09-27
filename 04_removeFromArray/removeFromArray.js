
const removeFromArray = function(inputArray, a, b, c, d) {
    let i = 0;
    let inputArrayLength = inputArray.length;
    while (i < inputArrayLength) {
        if  (inputArray[i] == a || b || c || d) {
            inputArray.splice(i,1);
        }
        ++i;
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
