let arr1 = [1, 4, 10, 2, 17, 1000, 5, 0]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let midValue = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[midValue] > arr[j]) {
                midValue = j
            }
        }

        if (midValue !== i) {
            [arr[i], arr[midValue]] = [arr[midValue], arr[i]];
        }

    }
    return arr
}

console.log(selectionSort(arr1))

// The time complexity of selection sort is O(n²) in all cases
// The space complexity of selection sort is O(1)