/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 输入: [10,9,2,5,3,7,101,18]
    输出: 4 
    解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 */

var arr = [10,9,2,5,3,7,101,18]

var res = function (nums){
    if(nums==0){
        return 0;
    }
    if(nums==1){
        return 1;
    }
    let n = nums.length;
    let dp = new Array(n).fill(1)
    for(var i=1;i<n;i++){
        for(var j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    dp.sort((a,b)=> a-b);
    return dp[dp.length - 1];
}

var myRes = res(arr)
console.log(myRes);
