/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => [].concat(...Array(nums.length - 1)
    .fill()
    .map((n, i) => Array(i + 1)
      .fill()
      .map((x, j) => [i + 1, j])))
  .filter(n => n[0] !== n[1] && nums[n[0]] + nums[n[1]] === target)[0]
