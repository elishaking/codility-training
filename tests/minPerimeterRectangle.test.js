const solution = require("../src/primeAndCompositeNumbers/minPerimeterRectangle");

describe("minPerimeterRectangle Unit Tests", () => {
  it("should return minimum perimeter", () => {
    expect(solution(100000000)).toEqual(40000);
    expect(solution(36)).toEqual(24);
    expect(solution(12000)).toEqual(440);
  });
});
