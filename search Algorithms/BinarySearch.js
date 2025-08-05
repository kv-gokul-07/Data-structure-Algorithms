
const arrValue = [1, 4, 10, 2, 17, 1000, 5, 0];

function selectionSort(arr1) {

    for(let i = 0; i < arr1.length; i++) {
        let index = i;

        for(let j = i + 1; j < arr1.length; j++) {
            if(arr1[index] > arr1[j]) {
                index = j;
            }
        }
        if(index !== i) {
            [arr1[i], arr1[index]] = [arr1[index], arr1[i]]
        }   
    }

    return arr1
}

function binarySearch(arr, target) {
    const sortedArr = selectionSort(arr);
        console.log("sort arr", sortedArr)
    let left = 0;

    let right = sortedArr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        console.log(mid, "mid")

        if(sortedArr[mid] === target) {
            return true;
        }
        else if(sortedArr[mid] < target) {
            left = mid + 1;
        }
        else 
            right = mid - 1;
    }
    return false;
}

console.log(binarySearch(arrValue, 17) ? "Given number is found" : "Given number is not found");
console.log(binarySearch(arrValue, 3) ? "Given number is found" : "Given number is not found");