const arr = ["a", "b", "c", "e", "1", "c", "b", "a"];

function checkPallindrome(arrData) {

   for(let i = 0; i < arrData.length; i++) {
    console.log(arrData[i], arrData[arrData.length - i - 1])
        if(arrData[i] != arrData[arrData.length - i - 1]) {
            return false;
        }
   }
   return true;
}

console.log(checkPallindrome(arr));

// Time Complexity: O(n)
// Space Complexity: O(1)