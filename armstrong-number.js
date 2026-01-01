// Write a function that checks if a number is armstrong number or not
// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 (true)
// 370 -> 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370 (true)
// 243 -> 2^3 + 4^3 + 3^3 = 8 + 64 + 27 = 99 (false)

function isArmStrongNumber(input) {
    if (typeof input !== "number") throw new Error("Please provide a number");

    if (!Number.isFinite(input)) {
        throw new Error("Please provide a valid number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Please provide a non-negative integer");
    }

    if (input === 0) return true;

    const inputString = input.toString();
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
        const val = Number(inputString[i]);
        sum += val ** inputString.length;
    }

    return sum === input;
}
console.log(isArmStrongNumber(153)); // true
console.log(isArmStrongNumber(370)); // true
console.log(isArmStrongNumber(243)); // false
