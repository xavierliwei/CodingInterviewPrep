//Given an array of positive numbers and a positive number ‘S,’ 
//find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
//Return 0 if no such subarray exists.

function f(arr, S){
    let sum=0, len=0, ans=Number.MAX_SAFE_INTEGER, left=0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        len += 1
        if(sum >= S) {
            while(sum >= S) {
                ans = Math.min(ans, len)
                sum -= arr[left]
                left += 1
                len -= 1
            }
        }
    }
    return ans
}

console.log(f([2,1,5,2,3,2], 7))
console.log(f([2,1,5,2,8], 7))
console.log(f([3,4,1,1,6], 8))