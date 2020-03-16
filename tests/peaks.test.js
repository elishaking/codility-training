const solution = require("../src/primeAndCompositeNumbers/peaks");

describe("peaks Unit Tests", () => {
  it("should return maximum number of blocks with at least one peak", () => {
    expect(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
    expect(solution([1, 3, 2, 1])).toEqual(1);
    expect(solution([1, 3, 4, 3, 4, 1, 2, 1])).toEqual(2);
  });
});
