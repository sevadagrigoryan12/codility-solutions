// [2,3,1,5]
function solution(A) {
  const N = A.length;
  const sumOfArray = A.reduce((acc, currentValue) => acc + currentValue, 0)
  const totalSum = (N+1) * (N+2) / 2
  return totalSum - sumOfArray;
}

console.log(solution([2, 3, 1, 5]))