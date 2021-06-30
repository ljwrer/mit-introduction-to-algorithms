import { ListNode } from '../../../../util/node-list'

/**
 *  find sorted list from start
 *  find node.val > cur.val
 *  swap
 *  因为链表向前查找元素缓慢，所以在比较完最后的元素以后直接跳到头指针，从头开始比较，此时必然有一个值
 */

export function insertionSortList (head: ListNode | null): ListNode | null {
  const dumbNode = new ListNode()
  dumbNode.next = head
  let cur = head.next
  let sortedTail = head
  while (cur !== null) {
    if(sortedTail.val <= cur.val){
      sortedTail = cur
    }else {
      let compareNodePrev = dumbNode
      let compareNode = dumbNode.next
      while (compareNode.val < cur.val){
        compareNodePrev = compareNode
        compareNode = compareNode.next
      }
      compareNodePrev.next = cur
      sortedTail.next = cur.next
      cur.next = compareNode
    }
    cur = sortedTail.next
  }
  return dumbNode.next
}

