function solution(A, K) {
    let length = A.length;

    // Check if the array is empty or if K is 0
    if (length === 0 || K === 0) {
        return A;
    }

    K = K % length;

    let rotatedArray = [];

    for (let i = 0; i < length; i++) {
        let newIndex = (i + K) % length;

        rotatedArray[newIndex] = A[i];
    }

    return rotatedArray;
}

// Test the solution with the given examples
console.log(solution([3, 8, 9, 7, 6], 3)); // Output: [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // Output: [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // Output: [1, 2, 3, 4]