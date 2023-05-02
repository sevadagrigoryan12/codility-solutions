function solution(number) {
    const binaryRepresenation = number.toString(2)
    let max = 0
    let counter = 0
    for (let i = 0; i < binaryRepresenation.length; i++) {
        if (binaryRepresenation[i] === '1') {
            max = Math.max(max, counter)
            counter = 0
            continue
        }

        if (i === binaryRepresenation.length - 1 && binaryRepresenation[i] === 0) {
            return max;
        }

        counter++
    }

    return max
}