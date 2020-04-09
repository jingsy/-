//  # 找出数组arr=[1, -2, 4, -7....]中的最大连续子序列之和，如[1,2,3,-4]为1+2+3=6。  

var arr = [6, -3, -2, 7, -15, 1, 2, 2]
function normal(arr) {
    var maxSum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var sum = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            if (maxSum < sum) {
                maxSum = sum;
            }
            console.log('sum is ' + sum);
        }
    }
    return maxSum;
}
function dp(arr) {
    var max = arr[0];
    var res = arr[0];
    for (var i = 1; i < arr.length; i++) {
        max = Math.max(max + arr[i], arr[i]);
        res = Math.max(max, res);
    }
    return res
}