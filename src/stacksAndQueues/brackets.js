/**
 * Given a string S consisting of N characters, returns 1 if S is
 * properly nested and 0 otherwise
 *
 * Detected time complexity: O(N)
 * @param {string} S
 */
function solution(S) {
  const chars = { "(": ")", "{": "}", "[": "]" };
  const closingChars = { ")": 1, "}": 1, "]": 1 };
  let closingCharStack = [];
  let n = 0;

  if (S.length === 0) return 1;
  if (!chars[S[0]]) return 0;

  for (let i = 0; i < S.length; i++) {
    if (chars[S[i]]) closingCharStack.push(chars[S[i]]);
    else if (closingChars[S[i]] && S[i] !== closingCharStack.pop()) return 0;
  }

  return closingCharStack.length === 0 ? 1 : 0;
}

module.exports = solution;
