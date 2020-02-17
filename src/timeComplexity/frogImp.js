/**
 * returns the minimal number of jumps from X to Y with step-size D
 * @param {number} X 
 * @param {number} Y 
 * @param {number} D 
 */
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D)
}

module.exports = solution
