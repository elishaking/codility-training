const solution = require("../src/stacksAndQueues/brackets");

describe("brackets Unit Tests", () => {
  it("should check if string is properly nested", () => {
    expect(solution("")).toEqual(1);
    expect(solution("([)()]")).toEqual(0);
    expect(solution("{[()()]}")).toEqual(1);
  });
});
