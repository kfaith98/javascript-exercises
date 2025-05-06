const reverseString = function(s) {
    let result = [];

    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
