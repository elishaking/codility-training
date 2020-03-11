const solution = require("../src/primeAndCompositeNumbers/countFactors");

describe("countFactors Unit Tests", () => {
  it("should return number of factors", () => {
    expect(solution(24)).toEqual(8);
    expect(solution(2023838)).toEqual(16);
    expect(solution(100)).toEqual(9);
  });
});
