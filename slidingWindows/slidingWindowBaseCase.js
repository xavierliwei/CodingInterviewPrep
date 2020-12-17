// find average of all K-length subarray
function f(arr, K){
    let ans = [], avg = 0.0
    for(let i=0; i<arr.length; i++){
        if(i < K) {
            avg += arr[i]
            if(i === K-1){
                avg /= K
                ans.push(avg)
            }
        } else {
            avg += (arr[i] - arr[i-K])/K
            ans.push(avg)
        }
    }
    return ans
}

console.log(f([1,2,3,4,5,6], 2))