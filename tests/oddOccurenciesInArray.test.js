const solution = require('../src/arrays/oddOccurenciesInArray')

describe('oddOccurenciesInArray Unit Tests', () => {
  it('should return the value of the unpaired element', () => {
    const arr = [1, 2, 3, 1, 4, 2, 4]
    expect(solution(arr)).toEqual(3)
  })
})
