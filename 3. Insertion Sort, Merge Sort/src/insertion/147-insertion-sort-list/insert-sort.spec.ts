import { ListNode } from '../../../../util/node-list'
import { insertionSortList } from './insertion-sort'

const createCase = (input: number[], output: number[]) => {
  const listNode = ListNode.create(input)
  const result = insertionSortList(listNode)
  const resultArray = ListNode.toArray(result)
  expect(resultArray).toStrictEqual(output)
}

describe('insert-sort', () => {
  test('Example 1', () => {
    createCase([4, 2, 1, 3], [1, 2, 3, 4])
  })
  test('Example 2', () => {
    createCase([-1,5,3,4,0], [-1,0,3,4,5])
  })
  test('Example 3', () => {
    createCase([1], [1])
  })
})
