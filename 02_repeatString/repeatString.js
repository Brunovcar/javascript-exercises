const repeatString = function(inputString, loopNumber) {
    let i = 0;
    let outputString = '';
    if(loopNumber < 0) {
        outputString = "ERROR";
    }
    while (i < loopNumber) {
        outputString += inputString
        ++i;
    }
    return outputString;
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
