function Solution(A) {
    let result = 0
    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        result = result ^ element
    }
    return result
}

console.log(Solution([9,3,9,3,9,7,9]))