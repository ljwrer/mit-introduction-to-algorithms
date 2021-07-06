export abstract class Heap<T> {
  protected readonly list: (T | null)[] = [null]

  constructor (items: T[]) {
    this.list.push(...items)
    const size = items.length
    const op = size >> 1
    for (let i = op; i > 0; i--) {
      this.heapify(i)
    }
  }

  protected get size () {
    return this.list.length - 1
  }

  get isEmpty () {
    return this.size === 0
  }

  public extract () {
    if (!this.isEmpty) {
      const head = this.list[1]
      const tail = this.list.splice(-1, 1)[0]
      if (this.size > 0) {
        this.list[1] = tail
        this.heapify(1)
      }
      return head
    } else {
      throw new Error('heap is empty')
    }
  }

  protected hasIndex (index: number) {
    return index < this.list.length
  }

  protected swap (index1, index2) {
    [this.list[index1], this.list[index2]] = [this.list[index2], this.list[index1]]
  }

  /**
   * if item1 should be parent of item2 return true
   */
  protected abstract compareTo (item1: T, item2: T): boolean

  protected heapify (index: number) {
    const leftIndex = 2 * index
    const rightIndex = 2 * index + 1
    let extremeIndex = index
    if (this.hasIndex(leftIndex)) {
      if (this.compareTo(this.list[leftIndex], this.list[extremeIndex])) {
        extremeIndex = leftIndex
      }
    }
    if (this.hasIndex(rightIndex)) {
      if (this.compareTo(this.list[rightIndex], this.list[extremeIndex])) {
        extremeIndex = rightIndex
      }
    }
    if (extremeIndex !== index) {
      this.swap(extremeIndex, index)
      this.heapify(extremeIndex)
    }
  }

  insert (value: T) {
    let index = this.list.length
    this.list[index] = value
    let parentIndex = index >> 1
    while (parentIndex >= 1) {
      if (this.compareTo(this.list[index], this.list[parentIndex])) {
        this.swap(index, parentIndex)
        index = parentIndex
        parentIndex = index >> 1
      } else {
        break
      }
    }
  }

  isValid () {
    for (let i = 1; i < this.size >> 1; i++) {
      if (this.list[i] < this.list[2 * i]) {
        return false
      }
      const rightIndex = 2 * i + 1
      if (rightIndex <= this.size && this.compareTo(this.list[rightIndex], this.list[i])) {
        return false
      }
    }
    return true
  }
}

export class MaxHeap extends Heap<number> {
  protected compareTo (item1: number, item2: number): boolean {
    return item1 > item2
  }
}

export const heapSort = (nums: number[]) => {
  const heap = new MaxHeap(nums)
  const result = []
  while (!heap.isEmpty) {
    result.unshift(heap.extract())
  }
  return result
}

