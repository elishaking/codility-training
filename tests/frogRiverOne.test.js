const solution = require('../src/countingElements/frogRiverOne')

describe('frogRiverOne Unit Tests', () => {
  it('should return the earliest time to move from pos 0 to position X', () => {
    expect(solution(9, [1, 3, 4, 2, 7, 9, 6, 8, 5, 3, 1, 3, 5, 8])).toEqual(8)
    expect(solution(5, [1, 3, 4, 2, 4, 4, 3])).toEqual(-1)
  })
})
