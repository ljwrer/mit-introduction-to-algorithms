/**
 Do not return anything, modify nums1 in-place instead.



 */
/**
 Do not return anything, modify nums1 in-place instead.



 */
export function merge (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      i++
    } else {
      // 这个移动O(n)了
      for (let k = m; k > i; k--) {
        nums1[k] = nums1[k - 1]
      }
      nums1[i] = nums2[j]
      i++
      j++
      m++
    }
  }
  if (i === m && j < n) {
    let offset = 0
    while (j < n) {
      nums1[m + offset] = nums2[j]
      j++
      offset++
    }
  }
}

/**
 * 从后比较选最大值插入num1
 */
export function merge2 (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[i + j + 1] = nums1[i]
      i--
    } else {
      nums1[i + j + 1] = nums2[j]
      j--
    }
  }
  while (j >= 0) {
    nums1[j] = nums2[j]
    j--
  }
}
