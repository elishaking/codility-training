const solution = require("../src/sorting/maxProductOfThree");

describe("maxProductOfThree Unit Tests", () => {
  it("should return max triplet product", () => {
    expect(solution([-12, 30, 2, 20, 10])).toEqual(6000);
    expect(solution([12, -30, 12, 10])).toEqual(1440);
    expect(solution([-12, 30, 2])).toEqual(-720);
  });
});
