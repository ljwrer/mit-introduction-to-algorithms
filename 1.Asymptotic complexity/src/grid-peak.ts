/**
 * 1. get mid col
 * 2. find max in mid col
 * 3. if a(maxRow, midCol) < a(maxRow, midCol-1)
 *      find in [left, midCol -1 ] cols
 *    else if a(maxRow, midCol) < a(maxRow, midCol+1)
 *      find in [midCol+1, right ] cols
 *    else return max
 *
 *    if col is 1 return max
 */
export const gridPeakFind = (mat: number[][]): number[] => {
  return find(mat)
}
const find = (mat: number[][], left = 0, right = mat[0].length - 1) => {
  if (left === right) {
    return findMaxValueOfCol(mat, left).slice(0, -1)
  }
  const midColIndex = Math.floor((left + right) / 2)
  const [maxRowIndex, colIndex, maxValue] = findMaxValueOfCol(mat, midColIndex)
  const maxLeft = getMatValue(mat, maxRowIndex, midColIndex - 1)
  const maxRight = getMatValue(mat, maxRowIndex, midColIndex + 1)
  if (maxValue < maxLeft) {
    return find(mat, left, midColIndex - 1)
  } else if (maxValue < maxRight) {
    return find(mat, midColIndex + 1, right)
  } else {
    return [maxRowIndex, midColIndex]
  }
}
const findMaxValueOfCol = (mat: number[][], colIndex) => {
  let maxRowIndex = 0
  let maxValue = -1
  for (let i = 0; i < mat.length; i++) {
    const cur = mat[i][colIndex]
    if (cur > maxValue) {
      maxValue = cur
      maxRowIndex = i
    }
  }
  return [maxRowIndex, colIndex, maxValue]
}
const getMatValue = (mat: number[][], rowIndex: number, colIndex: number) => {
  return mat[rowIndex][colIndex] ?? -1
}

export const gridPeakFind2 = (mat: number[][]): number[] => {
  return find2(mat)
}
/**
 * 1. start split in col
 * 2. find mid col max
 * 3. compare max(maxLeft max maxRight best) and save best
 * 4. if best is on mid left col return find(startRowIndex, startColIndex, endRowIndex ,midColIndex - 1)
 *    if best is on mid right col return find(startRowIndex, midColIndex+1, endRowIndex, endColIndex)
 *    if best is on mid col return 2d peak find
 * 5. next loop start slit in row
 * 6. find mid row max
 * 7. compare max(maxTop max maxBottom best) and save best
 * 8. if best is on mid top row return find (startRowIndex, startColIndex, midRowIndex-1, endColIndex)
 *    if best in on mid bottom row return find (midRowIndex + 1, startColIndex, endRowIndex, endColIndex)
 *    if best in on mid row return 2d peak find
 * 9. quit if mid max is best seen
 */
const find2 = (
  mat: number[][],
  startRowIndex = 0,
  startColIndex = 0,
  endRowIndex = mat.length - 1,
  endColIndex = mat[0].length - 1,
  isSplitInCol = true,
  best = [-1, -1, -1]
) => {
  if (isSplitInCol) {
    const midColIndex = Math.floor((startColIndex + endColIndex) / 2)
    const [maxRowIndex, maxColIndex, maxValue] = findBestOfCol(
      mat,
      midColIndex,
      startRowIndex,
      startColIndex,
      endRowIndex,
      endColIndex,
    )

    if (maxValue > best[2]) {
      best = [maxRowIndex, maxColIndex, maxValue]
    }
    if (best[1] < midColIndex) {
      return find2(mat, startRowIndex, startColIndex, endRowIndex, midColIndex - 1, false, best)
    } else if (midColIndex < best[1]) {
      return find2(mat, startRowIndex, midColIndex + 1, endRowIndex, endColIndex, false, best)
    } else {
      return best.slice(0, -1)
    }

  } else {
    const midRowIndex = Math.floor((startRowIndex + endRowIndex) / 2)
    const [maxRowIndex, maxColIndex, maxValue] = findBestOfRow(
      mat,
      midRowIndex,
      startRowIndex,
      startColIndex,
      endRowIndex,
      endColIndex
    )

    if (maxValue > best[2]) {
      best = [maxRowIndex, maxColIndex, maxValue]
    }
    if (best[0] < midRowIndex) {
      return find2(mat, startRowIndex, startColIndex, midRowIndex - 1, endColIndex, true, best)
    } else if (midRowIndex < best[0]) {
      return find2(mat, midRowIndex + 1, startColIndex, endRowIndex, endColIndex, true, best)
    } else {
      return best.slice(0, -1)
    }
  }

}

const findBestOfCol = (
  mat: number[][],
  colIndex: number,
  startRowIndex: number,
  startColIndex: number,
  endRowIndex: number,
  endColIndex: number,
) => {
  let maxRowIndex = startRowIndex
  let maxValue = -1
  for (let i = 0; i <= endRowIndex; i++) {
    const cur = mat[i][colIndex]
    if (cur > maxValue) {
      maxValue = cur
      maxRowIndex = i
    }
  }
  let maxColIndex = colIndex;
  [-1, 1].forEach(i => {
    const curColIndex = colIndex + i
    if (curColIndex >= startColIndex && curColIndex <= endColIndex) {
      const cur = mat[maxRowIndex][curColIndex]
      if (cur > maxValue) {
        maxValue = cur
        maxColIndex = curColIndex
      }
    }
  })
  return [maxRowIndex, maxColIndex, maxValue]
}

const findBestOfRow = (
  mat: number[][],
  rowIndex: number,
  startRowIndex: number,
  startColIndex: number,
  endRowIndex: number,
  endColIndex: number,
) => {
  let maxColIndex = startColIndex
  let maxValue = -1
  for (let i = 0; i <= endColIndex; i++) {
    const cur = mat[rowIndex][i]
    if (cur > maxValue) {
      maxValue = cur
      maxColIndex = i
    }
  }
  let maxRowIndex = rowIndex;
  [-1, 1].forEach(i => {
    const curRowIndex = rowIndex + i
    if (curRowIndex >= startRowIndex && curRowIndex <= endRowIndex) {
      const cur = mat[curRowIndex][maxColIndex]
      if (cur > maxValue) {
        maxValue = cur
        maxRowIndex = curRowIndex
      }
    }
  })
  return [maxRowIndex, maxColIndex, maxValue]
}
