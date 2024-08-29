function addNum(...nums){
    let ans = 0;
    for(let n of nums){
        ans += n;
    }
    return ans;
}

console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));