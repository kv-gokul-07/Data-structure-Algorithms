let arr1 = [1, 4, 10, 2, 17, 1000, 5, 0]

function bubbleSort(arr) {
     let temp;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = i + 1; j < arr1.length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
     return arr
}

console.log(bubbleSort(arr1))

//Time Compexity and Space Compexity

// <---- The space complexity of Bubble Sort is O(1). ---->

    // This means that the amount of extra space (memory) 
    // required by the algorithm remains constant regardless 
    // of the size of the input array being sorted. 
    // Bubble Sort only needs a constant amount of 
    // additional space to store temporary variables 
    // or indices during the sorting process
    
    // <----  Best Case Time Complexity Analysis of Bubble Sort: O(N) ---->
    // <---- Worst Case Time Complexity Analysis of Bubble Sort: O(N2) ---->
    // <---- Average Case Time Complexity Analysis of Bubble Sort: O(N2) ---->