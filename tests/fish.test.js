const solution = require("../src/stacksAndQueues/fish");

describe("fish Unit Tests", () => {
  it("should return number of fishes that stay alive", () => {
    expect(solution([5, 3, 2, 1, 4], [0, 1, 0, 1, 0])).toEqual(2);
    expect(solution([4, 3, 2, 1, 5, 6], [0, 1, 0, 0, 0, 1])).toEqual(3);
    expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
  });
});
