export class ListNode {
  val: number
  next: ListNode | null

  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static create (list: number[]) {
    if (list.length === 0) return null
    const head = new ListNode()
    let cur = head
    const len = list.length
    list.forEach((item, index) => {
      cur.val = item
      if (index < len - 1) {
        const next = new ListNode()
        cur.next = next
        cur = next
      }
    })
    return head
  }

  static toArray (head: ListNode) {
    let cur = head
    const result: number[] = []
    while (cur !== null) {
      result.push(cur.val)
      cur = cur.next
    }
    return result
  }
}
