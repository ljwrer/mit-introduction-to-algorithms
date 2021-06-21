/**
 * 1. mid = (left + right)/2
 * 2. if a(mid) < a(mid - 1) find in [left, mid - 1]
 * 3. if a(mid) < a(mid + 1) find in [mid+1, right]
 * 4. else return mid
 */
export const peakFind = (list: number[], left=0, right=list.length - 1) => {
    if(left === right) return left
    const midIndex = Math.floor((left+right)/2)
    const mid = list[midIndex]
    if(mid < getListValue(list, midIndex - 1)){
        return peakFind(list, left, midIndex -1)
    }else if(mid < getListValue(list, midIndex + 1)){
        return peakFind(list, midIndex+1, right)
    }else {
        return midIndex
    }
}
const getListValue = (list: number[], index:number) => {
    return list[index] ?? -Infinity
}
