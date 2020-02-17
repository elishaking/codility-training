const solution = require('../src/iterations/binaryGap')

describe('Binary Gap Unit Tests', () => {
  it('should return correct binary gap for a positive integer', () => {
    expect(solution(29383829)).toEqual(7)
    expect(solution(10228372)).toEqual(5)
    expect(solution(2828)).toEqual(4)
    expect(solution(615242)).toEqual(3)
    expect(solution(10000)).toEqual(3)
    expect(solution(1000000000000000)).toEqual(3)
    expect(solution(2000000)).toEqual(4)
  })
})
