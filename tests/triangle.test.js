const solution = require("../src/sorting/triangle");

describe("triangle Unit Tests", () => {
  it("should check if triangle exists in array", () => {
    expect(solution([10, 50, 5, 1])).toEqual(0);
    expect(solution([10, 2, 5, 1, 8, 20])).toEqual(1);
    expect(solution([-10, -8, 20])).toEqual(0);
  });
});
