const solution = require('../src/timeComplexity/tapeEquilibrium')

describe('tapeEquilibrium Unit Tests', () => {
  it('should return minimal difference', () => {
    expect(solution([3, 1, 2, 4, 3])).toEqual(1)
    expect(solution([3, 1, -2])).toEqual(4)
  })
})
