const solution = require("../src/prefixSums/genomicRangeQuery");

describe("genomicRangeQuery Unit Tests", () => {
  it("should return correct range minimum", () => {
    expect(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
    expect(solution("CAGCCTGATTTCA", [2, 3, 0], [4, 5, 7])).toEqual([2, 2, 1]);
    expect(solution("CAGCCTAACGTA", [2, 3, 0, 3], [4, 5, 4, 6])).toEqual([
      2,
      2,
      1,
      1
    ]);
  });
});
