import { merge, merge2 } from './merge-intervals'

describe('merge intervals', () => {
  test('Example 1', () => {
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]])
  })
  test('Example 2', () => {
    expect(merge([[1,4],[4,5]])).toStrictEqual([[1,5]])
  })
})

describe('merge intervals 2', () => {
  test('Example 1', () => {
    expect(merge2([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]])
  })
  test('Example 2', () => {
    expect(merge2([[1,4],[4,5]])).toStrictEqual([[1,5]])
  })
})
