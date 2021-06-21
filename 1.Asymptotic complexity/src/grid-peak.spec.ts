import { gridPeakFind, gridPeakFind2 } from './grid-peak'

describe('grid-pick-find', () => {
  test('normal', () => {
    const accept = [
      [1,1],
      [2,2]
    ]
    expect(accept).toContainEqual(gridPeakFind([[10,20,15],[21,30,14],[7,16,32]]))
  })
  test('event', () => {
    const accept = [
      [1,0],
      [0,1]
    ]
    expect(accept).toContainEqual(gridPeakFind([[1,4],[3,2]]))
  })
  test('odd', () => {
    const accept = [
      [1,0],
      [2,4]
    ]
    expect(accept).toContainEqual(gridPeakFind( [[25,37,23,37,19],[45,19,2,43,26],[18,1,37,44,50]]))
  })
  test('odd2', () => {
    const accept = [
      [1,1],
      [2,2]
    ]
    expect(accept).toContainEqual(gridPeakFind( [[10,20,15],[21,30,14],[7,16,32]]))
  })

})

describe('grid-pick-find-quick', () => {
  test('normal', () => {
    const accept = [
      [1,1],
      [2,2]
    ]
    expect(accept).toContainEqual(gridPeakFind2([[10,20,15],[21,30,14],[7,16,32]]))
  })
  test('event', () => {
    const accept = [
      [1,0],
      [0,1]
    ]
    expect(accept).toContainEqual(gridPeakFind2([[1,4],[3,2]]))
  })
  test('odd', () => {
    const accept = [
      [2,4],
      [1,0]
    ]
    expect(accept).toContainEqual(gridPeakFind2( [[25,37,23,37,19],[45,19,2,43,26],[18,1,37,44,50]]))
  })
  test('odd2', () => {
    const accept = [
      [1,1],
      [2,2]
    ]
    expect(accept).toContainEqual(gridPeakFind2( [[10,20,15],[21,30,14],[7,16,32]]))
  })

})
