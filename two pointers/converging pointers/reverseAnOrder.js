
const inputValue = [1, 2, 3, 4, 5, 6, 7];

function reverseAnOrder(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
        let left = i;
        let right = arr.length - 1 - i;
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    return arr
}

console.log(reverseAnOrder(inputValue));