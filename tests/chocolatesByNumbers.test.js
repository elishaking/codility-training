const solution = require("../src/euclideanAlgorithm/chocolatesByNumbers");

describe("chocolatesByNumbers Unit Tests", () => {
  it("should return number of chocolates eaten", () => {
    expect(solution(10, 4)).toEqual(5);
    expect(solution(10, 7)).toEqual(10);
    expect(solution(100, 10)).toEqual(10);
  });
});
