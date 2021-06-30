export function merge (intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0])
  let cur = intervals.shift()
  let result = []
  while (intervals.length > 0){
    const interval = intervals[0]
    if(cur[1] < interval[0]){
      result.push(cur)
      cur = intervals.shift()
    }else {
      const interval = intervals.shift()
      cur[1] = Math.max(cur[1], interval[1])
    }
  }
  result.push(cur)
  return result
}

export function merge2 (intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0])
  const result = [intervals[0]]
  for(let i=1;i<intervals.length;i++){
    const last = result[result.length - 1]
    const interval = intervals[i]
    if(last[1] < interval[0]){
      result.push(interval)
    }else {
      last[1] = Math.max(last[1], interval[1])
    }
  }
  return result
}
