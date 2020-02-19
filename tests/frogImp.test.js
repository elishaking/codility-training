const solution = require('../src/timeComplexity/frogImp')

describe('frogIm Unit Tests', () => {
  it('should return the minimal number of jumps', () => {
    expect(solution(10, 10, 100)).toEqual(0)
    expect(solution(10, 100, 10)).toEqual(9)
    expect(solution(99, 100, 100)).toEqual(1)
    expect(solution(10, 1000000000, 100)).toEqual(10000000)
  })
})
