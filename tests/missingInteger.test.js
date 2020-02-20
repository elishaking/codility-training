const solution = require('../src/countingElements/missingInteger')

describe('missingInteger Unit Tests', () => {
  it('should return the smallest positive integer', () => {
    expect(solution([-10, -15, -1])).toEqual(1)
    expect(solution([1, 2, 4, 5])).toEqual(3)
    expect(solution([-1, -2, 1, 1, 5, 5])).toEqual(2)
  })
})
