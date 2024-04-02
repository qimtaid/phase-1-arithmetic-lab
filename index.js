
// Write your code here

// Define num1 and num2 for the multiply test
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Generate a random integer greater than 0 for the random test
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Define num3 and num4 for the mod test
const num3 = 14;
const num4 = 5;
const mod = num3 % num4;

// Define a set of numbers including 20 for the max test
const max = Math.max(5, 10, 15, 20, 25);

// Export variables for testing
module.exports = { multiply, random, mod, max };


