# Time Complexity

Complexity refers to the maximum number of primitive operations a program may execute. It makes it easy to estimate the running time of a program, however, accurately calculating the **time complexity** can be a challenging process. It is usually measured in orders of magnitude.

When calculating complexity, the operation that is often repeated during execution is called the **dominant operation**. Special focus should be given to the dominant operation when calculating time complexity.

```javascript
function sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1; // dominant operation
  }

  return sum;
}
```

The above function has **linear time complexity** and is described by the Big-O notation, **O(n)**. This is because the number of dominant operations grows linearly with (or is directly proportional to) the size of **n**.

## Different Time Complexities

### Constant Time Complexity - **O(1)**

```javascript
function scale(n) {
  const val = 10 * n;
  return val;
}
```

The function above always has a fixed number of operations

### Logarithmic Time Complexity - **O(log(n))**

```javascript
function logSum(n) {
  let sum = 0;
  for (let i = 1; i < n; i *= 2) {
    sum += 1;
  }

  return sum;
}
```

The number of dominant operations in the above function grows by **log(n)**

### Linear Time Complexity - **O(n)**

Time complexity is largely dependent on the worst case performance

```javascript
// n is the size of arr
function findNumber(n, arr, k) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === k) return true;
  }

  return false;
}
```

If `arr` has the number `k` at index `0`, then the program terminates quickly. The worst case is when `k` is at index `n - 1`, requiring `n` dominant operations, hence the function has **O(n)** time complexity

### Linearithmic Time Complexity - **O(nlog(n))**

```javascript
function funSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      sum += 1;
    }
  }

  return sum;
}
```

For each **nth** iteration of the outer loop, there are **log(n)** iterations of the inner loop producing a **O(nlog(n))** complexity

### Quadratic Time Complexity - **O(n^2)**

```javascript
// n is the size of arr
function expand(n, arr) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += arr[i] * arr[j];
    }
  }
  return result;
}
```

For each **nth** iteration of the outer `for loop`, there are **n** iteratons of the inner `for loop`, therefore the number of dorminant operations grows by **n\*n**, a **quadratic time complexity**

### Exponential Time Complexity - **2^O(n)**

The [traveling salesman problem](https://en.wikipedia.org/wiki/Traveling_salesman_problem) fits into this category

### Factorial Time Complexity - **O(n!)**

A good example of this is trying to determine a letter password of length **n** by trying every possible combination

# Space Complexity

Space complexity is amount of memory needed to perform a computation. It is also described by the Big-O notation.
Space complexity is determined by the number of global, local, input variables needed for a computation

- If a constant number of variables is required, then we have **constant space complexity** - **O(1)**
- If an array of length **n** needs to be created, that is **linear space complexity** - **O(n)**
