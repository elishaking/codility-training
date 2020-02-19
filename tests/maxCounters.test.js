const solution = require('../src/countingElements/maxCounters')

describe('maxCounters Unit Tests', () => {
  it('should return correct counter values', () => {
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2])
    expect(solution(3, [4, 4, 4])).toEqual([0, 0, 0])
    expect(solution(3, [1, 2, 3])).toEqual([1, 1, 1])
  })
})
