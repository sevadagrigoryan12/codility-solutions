function solution(N, A) {
    let counters = new Array(N).fill(0);
    let base = 0;
    let currentMax = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 1 && A[i] <= N) {
            counters[A[i] - 1] = Math.max(counters[A[i] - 1], base);
            counters[A[i] - 1]++;
            currentMax = Math.max(currentMax, counters[A[i] - 1]);
        } else if (A[i] === N + 1) {
            base = currentMax;
        }
    }

    for (let i = 0; i < N; i++) {
        counters[i] = Math.max(counters[i], base);
    }

    return counters;

}