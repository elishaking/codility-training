const solution = require("../src/sorting/numberOfDiscInsertions");

describe("numberOfDiscInsertions Unit Test", () => {
  it("should return number of intersections", () => {
    expect(solution([2, 1, 1, 2, 3, 1])).toEqual(12);
    expect(solution([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
    expect(solution([5, 6, 1, 8, 9, 100])).toEqual(15);
  });
});
