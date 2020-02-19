const solution = require('../src/countingElements/permCheck')

describe('permCheck Unit Tests', () => {
  it('should return 1 if array A is a permutation and 0 if it is not', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual(1)
    expect(solution([1, 4, 3, 2, 5])).toEqual(1)
    expect(solution([3, 2, 1])).toEqual(1)
    expect(solution([1, 2, 4, 5])).toEqual(0)
    expect(solution([1, 2, 2, 3, 4, 5])).toEqual(0)
    expect(solution([1])).toEqual(1)
    expect(solution([2])).toEqual(0)
    expect(solution([2, 3])).toEqual(0)
  })
})
