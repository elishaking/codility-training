/**
 *
 * @param {string} S
 */
function solution(S) {
  let open = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") open++;
    else if (S[i] === ")") open--;

    if (open < 0) return 0;
  }

  return open === 0 ? 1 : 0;
}

const x =
  new Array(10001).fill("(").join("") + new Array(10000).fill(")").join("");

console.log(solution(x)); // "(()(())())" ")("
