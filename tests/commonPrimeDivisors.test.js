const solution = require("../src/euclideanAlgorithm/commonPrimeDivisors");

describe("commonPrimeDivisors Unit Tests", () => {
  it("should count number of common divisors", () => {
    expect(solution([15, 75], [75, 15])).toEqual(2);
    expect(solution([20, 100, 75], [30, 110, 15])).toEqual(1);
    expect(solution([30, 50], [50, 30])).toEqual(0);
  });
});
