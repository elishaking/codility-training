const solution = require("../src/sieveOfEratosthenes/countNonDivisible");

describe("countNonDivisible Unit Tests", () => {
  it("should return an array of non-divisibles", () => {
    expect(solution([3, 1, 2, 3, 2, 1])).toEqual([2, 4, 2, 2, 2, 4]);
    expect(solution([3, 5, 9, 3, 2, 3])).toEqual([3, 5, 2, 3, 5, 3]);
    expect(solution([3, 5, 3])).toEqual([1, 2, 1]);
  });
});
