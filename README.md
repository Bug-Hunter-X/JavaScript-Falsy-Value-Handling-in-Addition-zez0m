# JavaScript Falsy Value Handling in Addition

This repository demonstrates a subtle bug in JavaScript related to how it handles falsy values (like 0, "", false, null, undefined, NaN) within addition operations.

## The Bug
The `foo` function attempts to handle null values gracefully by returning 0 if either `a` or `b` is null. However, it doesn't explicitly handle other falsy values, leading to potential unexpected behavior.

## The Solution
The solution involves using stricter checks to handle all falsy values explicitly and ensure a more robust function.  This improved version will provide more predictable results. 

## How to run the code
1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the buggy behavior and `node bugSolution.js` to see the fixed version. 