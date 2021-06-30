import { ListNode } from '../../../../util/node-list'

export function mergeTwoLists (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dumbNode = new ListNode()
  let cur = dumbNode
  let node1 = l1
  let node2 = l2
  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
      cur.next = node1
      cur = node1
      node1 = node1.next
    } else {
      cur.next = node2
      cur = node2
      node2 = node2.next
    }
  }
  if (node1 !== null) {
    cur.next = node1
  }
  if (node2 !== null) {
    cur.next = node2
  }
  return dumbNode.next
}
