const solution = require('../src/prefixSums/passingCars')

describe('passingCars Unit Tests', () => {
  it('should return number of pairs', () => {
    expect(solution([0, 1, 0, 1, 1])).toEqual(5)
    expect(solution([0, 1, 0, 1, 1, 1])).toEqual(7)
    expect(solution([0, 1, 1, 1])).toEqual(3)
  })
})
