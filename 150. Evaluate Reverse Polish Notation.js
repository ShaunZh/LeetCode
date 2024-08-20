/**
 * @param {string[]} tokens
 * @return {number}
 */
const operators = [
    '+',
    '-',
    '*',
    '/'
];
const calculate = (operator, op1, op2) => {
    const nOp1 = Number(op1);
    const nOp2 = Number(op2);
    switch (operator) {
        case '+': return nOp1 + nOp2;
        case '-': return nOp1 - nOp2;
        case '*': return nOp1 * nOp2;
        case '/': return Math.trunc(nOp1 / nOp2);
        default: return 0;
    }
}

var evalRPN = function (tokens) {
    const newArr = []
    for (let item of tokens) {
        if (!operators.includes(item)) {
            newArr.push(item);
        } else {
            const op2 = newArr.pop();
            const op1 = newArr.pop();
            const result = calculate(item, op1, op2);
            newArr.push(result);
        }
    }

    return newArr[0]
};