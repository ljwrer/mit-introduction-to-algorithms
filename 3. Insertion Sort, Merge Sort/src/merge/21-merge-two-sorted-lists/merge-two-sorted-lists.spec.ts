import { ListNode } from '../../../../util/node-list'
import { mergeTwoLists } from './merge-two-sorted-lists'

const createCase = (input1: number[], input2: number[], output: number[]) => {
  const listNode1 = ListNode.create(input1)
  const listNode2 = ListNode.create(input2)
  const result = mergeTwoLists(listNode1, listNode2)
  const resultArray = ListNode.toArray(result)
  expect(resultArray).toStrictEqual(output)
}

describe('merge-sort-linked-list', () => {
  test('Example 1', () => {
    createCase([1,2,4], [1, 3, 4], [1,1,2,3,4,4])
  })
  test('Example 2', () => {
    createCase([], [], [])
  })
  test('Example 3', () => {
    createCase([], [0], [0])
  })
})
