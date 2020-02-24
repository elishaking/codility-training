const solution = require("../src/sorting/distinct");

describe("distinct Unit Tests", () => {
  it("should return the number of distinct elements in an array", () => {
    expect(solution([2, 1, 1, 2, 3, 1])).toEqual(3);
    expect(solution([1, 2, 3, 4, 5])).toEqual(5);
    expect(solution([1, -1, -2, -1, 1, 3])).toEqual(4);
  });
});
