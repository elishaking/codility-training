const solution = require("../src/leader/equileader");

describe("equileader Unit Test", () => {
  it("should return number of equileaders", () => {
    expect(solution([4, 3, 4, 4, 4, 2])).toEqual(2);
    expect(solution([4, 3, 4, 4, 4, 2, 3, 4, 1])).toEqual(0);
    expect(solution([34, 34])).toEqual(1);
  });
});
