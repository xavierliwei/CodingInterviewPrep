//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
function f(arr, K) {
    let ans=0, sum=0, max=0
    for(let i=0; i<arr.length; i++){
        if(i < K) {
            sum += arr[i]
            if(i === K-1) {
                max = sum
            }
        }else{
            sum += arr[i] - arr[i-K]
            max = Math.max(sum, max)
        }
    }
    return max
}

console.log(f([2,1,5,1,3,2], 3))
console.log(f([2,3,4,1,5], 2))