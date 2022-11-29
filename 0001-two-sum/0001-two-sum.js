/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numSet = {};
  for (let i = 0; i < nums.length; i++) {
      if((target - nums[i]) in numSet){
          console.log(numSet)
         console.log(numSet[(target-nums[i])], i)
          return [numSet[(target-nums[i])], i]
      }
      numSet[nums[i]] = i;
      
  }
  return -1;
};