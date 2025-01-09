function foo(a, b) {
  //Check if either a or b is falsy using loose equality
  if (!a || !b) {
    return 0; // Handle falsy values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 2)); // Output: 0
console.log(foo(1, 0)); // Output: 0
console.log(foo(0, 0)); // Output: 0
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,2)); //Output: 0
console.log(foo(2,undefined)); //Output: 0