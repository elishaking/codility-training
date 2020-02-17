function expand(n, arr) {
  let result = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += arr[i] * arr[j]
    }
  }
  return result
}

console.log(expand(2, [1, 2]))