const a = [4, 1, -6, -2, -5, 3, 2, -8, 6, 7];

const firstNeg = (num) => {
    return num < 0;
};

const result = a.find(firstNeg);
console.log(result);

const result1 = a.findIndex(firstNeg);
console.log(result1);

