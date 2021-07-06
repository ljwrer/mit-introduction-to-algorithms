import { heapSort } from './Heap'

describe('heap sort', () => {
  test('Example 1', () => {
    expect(heapSort([1, 3, 6, 5, 9, 20, 11])).toStrictEqual([1, 3, 5, 6, 9, 11, 20])
  })
})
