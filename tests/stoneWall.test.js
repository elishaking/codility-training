const solution = require("../src/stacksAndQueues/stoneWall");

describe("stoneWall Unit Tests", () => {
  it("should return minimum number of blocks", () => {
    expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toEqual(7);
    expect(solution([8, 8, 5, 7, 2, 1, 9, 8, 7, 4, 8])).toEqual(10);
    expect(solution([8, 8, 8])).toEqual(1);
  });
});
