
Implement a function mapAsyncLimit(arr, limit, asyncFn) that:
Runs asyncFn on each item of arr.

Only runs limit number of async operations concurrently.

Returns a Promise that resolves to an array of results in the same order as input.

Input:
arr: Array of items.

limit: Maximum number of concurrent async calls.

asyncFn: Asynchronous function returning a promise.

Output:
A promise that resolves to an array of results after processing all inputs using asyncFn.

Example Inputs & Outputs
javascript
Copy
Edit
// Example: delayFn = x => new Promise(resolve => setTimeout(() => resolve(x * 2), 100))

await mapAsyncLimit([1, 2, 3, 4], 2, delayFn);
// Output: [2, 4, 6, 8]

// Example: limit = 1 behaves like sequential map
await mapAsyncLimit([1, 2, 3], 1, delayFn);
// Output: [2, 4, 6]
Constraints & Edge Cases
arr.length can be 0 → should return an empty array.

limit should be ≥ 1.

asyncFn may fail → should propagate the error.

Results must maintain input order.

Should handle non-promise-returning functions gracefully (wrap in Promise.resolve() if needed).

