const solution = require("../src/prefixSums/minAvgTwoSlice");

describe("minAvgTwoSlice Unit Tests", () => {
  it("should compute mean average", () => {
    expect(solution([4, 2, 2, 5, 1, 5, 8])).toEqual(1);
    expect(solution([4, 2, 2, 5, 1, 5, 8, 87, 65, 1])).toEqual(1);
    expect(solution([4, 2, -100, 5, 1])).toEqual(1);
  });
});
