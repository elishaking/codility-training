const solution = require("../src/stacksAndQueues/nesting");

describe("nesting Unit Tests", () => {
  it("should check if string is properly nested", () => {
    expect(solution("")).toEqual(1);
    expect(solution("(()(())())")).toEqual(1);
    expect(solution(")(")).toEqual(0);
    expect(
      solution(
        new Array(10000).fill("(").join("") +
          new Array(10000).fill(")").join("")
      )
    ).toEqual(1);
  });
});
