const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = num1.concat(num2, [7, 8, 9]); // <- .concat junta os arrays
console.log(num3);

// ... rest -> spread
const num4 = [...num1, ...num2];
console.log(num4);
