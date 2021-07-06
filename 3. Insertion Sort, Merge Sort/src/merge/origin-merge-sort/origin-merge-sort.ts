export const mergeSort = (nums: number[]) => {
  if (nums.length < 2) {
    return nums
  }
  const half = nums.length >> 1
  return merge(mergeSort(nums.slice(0, half)), mergeSort(nums.slice(half)))

}
const merge = (nums1: number[], nums2: number[]) => {
  let result = []
  while (nums1.length && nums2.length) {
    if (nums1[0] >= nums2[0]) {
      result.push(nums2.shift())
    } else {
      result.push(nums1.shift())
    }
  }
  return [...result, ...nums1, ...nums2]
}
