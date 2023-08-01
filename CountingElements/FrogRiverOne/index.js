function solution(X, A) {
    let steps = X;
    const positionsArray = []

    for (let i = 0; i < A.length; i++) {
        if(!positionsArray[A[i]]) {
            positionsArray[A[i]] = true;
            steps--
        }

        if(steps === 0) return i
        
    }

    return -1
}


console.log(solution(5, [1,3,1,4,2,3,5,4]))