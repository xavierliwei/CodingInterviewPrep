//Given a string, find the length of the longest substring in it with no more than K distinct characters.

function f(str, K) {
    let ans=0, map=new Map(), left=0
    for(let i=0; i<str.length; i++) {
        if(map.has(str[i])){
            map.set(str[i], map.get(str[i]) + 1)
        }else{
            map.set(str[i], 1)
        }
        // console.log(map.size)
        if(map.size > K) {
            if(map.get(str[left]) === 1) {
                map.delete(str[left])
            }else{
                map.set(str[left], map.get(str[left]) - 1)
            }
            left += 1
        }else{
            //Important! what you want to save: the length of the substring
            ans = Math.max(ans, i-left+1)
        }
    }
    return ans
}

console.log(f("araaci", 2))
console.log(f("araaci", 1))
console.log(f("cbbebi", 3));