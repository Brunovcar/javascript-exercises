const reverseString = function(inputString) {
    let inputStringLength = inputString.length;
    let outputString = '';
    let i = 0;
    while (i < inputStringLength) {
        outputString += inputString.slice(inputStringLength - i -1 ,inputStringLength - i)
        ++i;
    }
    return outputString;
};


// Do not edit below this line
module.exports = reverseString;
