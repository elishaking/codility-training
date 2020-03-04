const solution = require("../src/leader/denominator");

describe("denominator Unit Tests", () => {
  it("should return denominator", () => {
    expect(solution([2, 1, 1, 1, 3])).toEqual(1);
    expect(solution([1, 2, 5, 3, 5, 3, 3, 3, 3])).toEqual(3);
    expect(solution([3, 4, 3, 2, 3, -1, 3, 3])).toEqual(0);
  });
});
