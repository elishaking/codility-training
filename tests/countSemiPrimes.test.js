const solution = require("../src/sieveOfEratosthenes/countSemiPrimes");

describe("countSemiPrimes Unit Tests", () => {
  it("should count number of semi-primes in the given array of ranges", () => {
    expect(solution(26, [1, 4, 16], [26, 10, 20])).toEqual([10, 4, 0]);
    expect(solution(100, [1, 20, 10], [26, 40, 15])).toEqual([10, 9, 3]);
    expect(solution(50, [3, 17, 16], [15, 41, 32])).toEqual([6, 9, 4]);
  });
});
