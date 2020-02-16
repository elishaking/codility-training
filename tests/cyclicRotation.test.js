const solution = require('../src/arrays/cyclicRotation')

describe('cyclicRotation Unit Tests', () => {
  it('should rotate array A, 3 times', () => {
    const A = [1, 2, 3, 4, 5]
    const K = 3

    expect(solution(A, K)).toEqual([3, 4, 5, 1, 2])
  })

  it('should return empty array', () => {
    const A = []
    const K = 3

    expect(solution(A, K)).toEqual([])
  })
})
