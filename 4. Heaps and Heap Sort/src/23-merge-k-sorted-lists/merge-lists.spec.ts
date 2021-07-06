import { ListNode } from '../../../util/node-list'
import { mergeKLists, mergeKLists2 } from './merge-lists'

const createCase = (input: number[][], output: number[], fn: typeof mergeKLists) => {
  const listNode = input.map(list => ListNode.create(list))
  const result = fn(listNode)
  const resultArray = ListNode.toArray(result)
  expect(resultArray).toStrictEqual(output)
}


describe('merge-lists-by-heap', () => {
  test('Example 1', () => {
    createCase([[1,4,5],[1,3,4],[2,6]], [1,1,2,3,4,4,5,6], mergeKLists)
  })
  test('Example 2', () => {
    createCase([], [], mergeKLists)
  })
  test('Example 3', () => {
    createCase([[]], [], mergeKLists)
  })
})

describe('merge-lists-by-divide', () => {
  test('Example 1', () => {
    createCase([[1,4,5],[1,3,4],[2,6]], [1,1,2,3,4,4,5,6], mergeKLists2)
  })
  test('Example 2', () => {
    createCase([], [], mergeKLists2)
  })
  test('Example 3', () => {
    createCase([[]], [], mergeKLists2)
  })
})
