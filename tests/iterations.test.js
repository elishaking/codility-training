const solution = require('../src/1_Iterations')

describe('Binary Gap Unit Tests', () => {
  it('should return correct binary gap for a positive integer', () => {
    expect(solution(29383829)).toEqual(7)
    expect(solution(10228372)).toEqual(5)
    expect(solution(2828)).toEqual(4)
    expect(solution(615242)).toEqual(3)
    expect(solution(10000)).toEqual(3)
    expect(solution(1000000000000000)).toEqual(3)
    expect(solution(2000000)).toEqual(4)
  })

  it('should return correct binary gap for a negative integer', () => {
    expect(() => {
      solution(-29383829)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-10228372)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-2828)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-615242)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-10000)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-1000000000000000)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-2000000)
    }).toThrowError(Error("N must be a positive integer"))
  })

  it('should through error when N is not an integer', () => {
    expect(() => {
      solution(13.5)
    }).toThrowError(Error("N must be a positive integer"))

    expect(() => {
      solution(-13.5)
    }).toThrowError(Error("N must be a positive integer"))
  });
})
