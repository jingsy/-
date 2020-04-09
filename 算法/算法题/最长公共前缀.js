/**
 * 找出最长公共前缀
 */
var arr = ['aavvdc', 'aavvaaceg', 'aavvbfg'];
var arr1 = ['abc','abcd','abcde']

const findRepeatStr = arr => {
    let i = 0;
    let temp = [];
    let res =[];
    while (true) {
        arr.forEach(item => {
            temp.push(item[i])
        })
        console.log(`第${i}轮:`+temp);
        
        temp = [...new Set([...temp])];
        
        if (temp.length == 1) {
            res.push(...temp)
            i++
            temp = []
        } else {
            console.log('final res: '+res);
            return false
        }
    }


}

console.log(findRepeatStr(arr))
// console.log(findRepeatStr(arr1))


// 0: (6) ["a", "a", "v", "v", "d", "c"]
// 1: (7) ["a", "a", "a", "a", "c", "e", "g"]
// 2: (5) ["a", "a", "b", "f", "g"]