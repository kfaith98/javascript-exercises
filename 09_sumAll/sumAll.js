const sumAll = function(min, max) {
    if (min <=0 || max <= 0) {
        return "ERROR";
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    let minimum = Math.min(min, max);
    let maximum = Math.max(min, max);
    let sum = 0;

    for (let i = minimum; i <= maximum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;