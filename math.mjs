// math.js
export function add(a, b) {
  let sum = a + b;
  return sum;
}

export function subtract(a, b) {
  let diff = a - b;
  return diff;
}

export function multiply(a, b) {
  let product = a * b;
  return product;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  let quotient = a / b;
  return quotient;
}