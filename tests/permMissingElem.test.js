const solution = require('../src/timeComplexity/permMissingElem')

describe('permMissingElem Unit Tests', () => {
  it('should find the missing element', () => {
    const arr = [1, 3, 5, 6, 7, 2]
    expect(solution(arr)).toEqual(4)
  })
})
