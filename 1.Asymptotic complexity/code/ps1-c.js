const f1 = n => n ** Math.sqrt(n)
const f2 = n => 2 ** n
const f3 = n => (n ** 10) * (2 ** (n/2))
const f4 = n => n ** n
const f5 = n => n ** 0.999999 * Math.log(n)
const f6 = n => n * 10000000

const run = (fn) => {
    let i = 1
    let val = 0
    while(val < Infinity){
        val = fn(i)
        i += 1
    }
    console.log(i)
}

console.log(f5(100000000))
console.log(f6(100000000))

const algo1 = (nums) => {
    for(let i=0;i<nums.length - 1;i++){
        if(nums[i] >= nums[i+1]){
            return nums[i]
        }
    }
    return nums[nums.length - 1]
}

const algo2 = (nums) => {
    if(nums.length === 1 ) return  nums[0]
    const midIndex = Math.floor(nums.length / 2)
    const mid = nums[midIndex]
    if(nums[midIndex-1] > mid){
        return algo2(nums.slice(0, midIndex))
    }else if(nums[midIndex + 1] > mid){
        return algo2(nums.slice(midIndex+1))
    }else {
        return mid
    }
}


const algo2 = (nums) => {
    const n = nums[0].length
    const m = nums.length

}
