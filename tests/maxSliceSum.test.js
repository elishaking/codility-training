const solution = require("../src/maximumSliceProblem/maxSliceSum");

describe("maxSliceSum Unit Tests", () => {
  it("should return max slice sum", () => {
    expect(solution([10])).toEqual(10);
    expect(solution([3, 2, -6, 4, 0])).toEqual(5);
    expect(solution([3, 2, 60, 4, 0])).toEqual(69);
  });
});
