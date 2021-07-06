import { mergeSort } from './origin-merge-sort'

describe('origin, merge-sort', () => {
  test('Example 1', () => {
    expect(mergeSort([2,1,2,5,6,3])).toStrictEqual([1,2,2,3,5,6])
  })
})
