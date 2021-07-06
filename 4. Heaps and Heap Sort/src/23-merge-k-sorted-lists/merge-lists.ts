import { mergeTwoLists } from '../../../3. Insertion Sort, Merge Sort/src/merge/21-merge-two-sorted-lists/merge-two-sorted-lists'
import { ListNode } from '../../../util/node-list'
import { Heap } from '../heap/Heap'

class MinHeap extends Heap<ListNode> {
  protected compareTo (item1: ListNode, item2: ListNode): boolean {
    return item1.val < item2.val
  }
}

export function mergeKLists (lists: Array<ListNode | null>): ListNode | null {
  const heap = new MinHeap(lists.filter(list => list !== null))
  const dumb = new ListNode()
  let node = dumb
  while (!heap.isEmpty) {
    const minNode = heap.extract()
    node.next = minNode
    const minNextNode = minNode.next
    if (minNextNode !== null) {
      heap.insert(minNextNode)
    }
    minNode.next = null
    node = minNode
  }
  return dumb.next
}

export function mergeKLists2 (lists: Array<ListNode | null>): ListNode | null {
  return mergeLists(lists, 0, lists.length - 1)
}

const mergeLists = (lists: Array<ListNode | null>, begin: number, end: number) => {
  if (lists.length < 1) return null
  if (begin >= end) return lists[begin]
  if (end - begin === 1) return mergeTwoLists(lists[begin], lists[end])
  const mid = (end + begin) >> 1
  return mergeTwoLists(mergeLists(lists, begin, mid), mergeLists(lists, mid + 1, end))
}
