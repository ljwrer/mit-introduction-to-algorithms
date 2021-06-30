/**
 *  if target < middle goto(lo, middle - 1)
 *  if middle < target goto(middle+1,hi)
 *  if middle = target return middleIndex
 *
 *  break when:
 *    10 100 1000
 *    hi === lo
 *
 */
export function searchInsert (nums: number[], target: number): number {
  const len = nums.length
  let lo = 0
  let hi = len - 1
  while (lo < hi) {
    const midIndex = (lo + hi) >> 1
    const mid = nums[midIndex]
    if (mid === target) {
      return midIndex
    } else if (target < mid) {
      hi = midIndex - 1
    } else if (mid < target) {
      lo = midIndex + 1
    }
  }
  const val = nums[lo]
  if (target <= val) {
    return lo
  } else if (target > val) {
    return hi + 1
  }
}
