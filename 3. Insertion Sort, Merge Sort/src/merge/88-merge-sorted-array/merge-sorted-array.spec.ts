import { merge, merge2 } from './merge-sorted-array'

describe('merge-sort', () => {
  test('Example 1', () => {
    const nums1 = [1,2,3,0,0,0]
    merge(nums1,3,[2,5,6], 3)
    expect(nums1).toStrictEqual([1,2,2,3,5,6])
  })
  test('Example 2', () => {
    const nums1 = [1]
    merge(nums1,1,[], 0)
    expect(nums1).toStrictEqual([1])
  })
  test('Example 3', () => {
    const nums1 = []
    merge(nums1,0,[1], 1)
    expect(nums1).toStrictEqual([1])
  })
})

describe('merge-sort2', () => {
  test('Example 1', () => {
    const nums1 = [1,2,3,0,0,0]
    merge2(nums1,3,[2,5,6], 3)
    expect(nums1).toStrictEqual([1,2,2,3,5,6])
  })
  test('Example 2', () => {
    const nums1 = [1]
    merge2(nums1,1,[], 0)
    expect(nums1).toStrictEqual([1])
  })
  test('Example 3', () => {
    const nums1 = []
    merge2(nums1,0,[1], 1)
    expect(nums1).toStrictEqual([1])
  })
})
