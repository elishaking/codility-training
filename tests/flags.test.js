const solution = require("../src/primeAndCompositeNumbers/flags");

describe("flags Unit Tests", () => {
  it("should return number of flags", () => {
    expect(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
    expect(solution([1, 5, 3, 4, 6, 2])).toEqual(2);
    expect(
      solution([1, 5, 3, 4, 1, 2, 3, 1, 7, 8, 3, 6, 2, 3, 4, 6, 2, 1])
    ).toEqual(4);
  });
});
