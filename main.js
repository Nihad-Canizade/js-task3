//  Sert 1
const array = [1, 2, 3, 4, 5];
const array2 = [];

for (let i = array.length - 1; i >= 0; i--) {
    array2.push(array[i]);
}



// Sert 2
const strArray = ["cat", "mouse", "panter", "chicken"];
strArray.shift();
strArray.push("bird");



// Sert 3
const nums = [1, 2, 3, 4, 5];
var length = nums.length;

for (let i = 0; i < length; i++) {
    nums.push(nums[i] ** 2);
}



// Sert 4
const nums2 = [1, 2, 3, 4, 5, 6];
const nums3 = [];

for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] % 2 != 1) {
        nums3.push(nums2[i]);
    }
}

console.log(nums3);
