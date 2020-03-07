const solution = require("../src/maximumSliceProblem/maxProfit");

describe("maxProfit Unit Tests", () => {
  it("should return max profit", () => {
    expect(solution([23171, 21011, 21123, 21366, 21013, 21367])).toEqual(356);
    expect(solution([23171, 21011, 21123, 21366])).toEqual(355);
    expect(solution([23171, 21011, 21123, 21366, 1000000])).toEqual(978989);
  });
});
