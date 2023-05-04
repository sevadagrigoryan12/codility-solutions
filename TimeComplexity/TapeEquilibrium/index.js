function solution(A) {
    let diff = Infinity;
    let leftSide = 0
    let rightSide = A.reduce((acc, i) => i+acc, 0)
    for (let i = 0; i < A.length - 1; i++) {
        leftSide += A[i]
        rightSide -= A[i]

        if (diff > Math.abs(rightSide - leftSide)) {
            diff = Math.abs(rightSide - leftSide)
        }
    }

    return diff;
}

console.log(solution([3, 1, 2, 4, 3]))