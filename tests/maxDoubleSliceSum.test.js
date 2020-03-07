const solution = require("../src/maximumSliceProblem/maxDoubleSliceSum");

describe("maxDoubleSliceSum Unit Tests", () => {
  it("should return max double slice sum", () => {
    expect(solution([3, 2, 6, -1, 4, 5, -1, 2])).toEqual(17);
    expect(solution([3, 2, 6, -1, 2])).toEqual(8);
    expect(solution([3, 2, 6, -1, 100, 10, 100, 2])).toEqual(218);
  });
});
