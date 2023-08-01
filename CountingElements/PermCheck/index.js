function solution(A) {
    const N = A.length;
    const checkArray = new Array(N+1).fill(false);

    for(let i=0; i<N; i++){
        if(A[i] > N) {
            return 0;
        }
        if(checkArray[A[i]]) {
            return 0;
        }
        checkArray[A[i]] = true;
    }

    return 1;
}


console.log(solution([1, 2, 3, 4, 1]))