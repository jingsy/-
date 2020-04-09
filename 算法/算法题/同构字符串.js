// 2. # 现将英汉词典导入到数组array=[...,mate,...meat,...meta,......team,.....]中，
// 找出所有的同构词 # 你需要输出一个二维数组[..., [mate, meat, meta, ...], ...] 


var arr = ['mate', 'meat', 'tea', 'meta', 'eat', 'team']
// arr.sort();
console.log(test(arr))
function test(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        // console.log('第'+i+'轮:当前值为'+arr[i])
        var charArr = [];
        charArr[i]=arr[i].split('')
        charArr[i].sort()
        // console.log('单词构成当前值为'+charArr[i])
        if(!map.has(charArr[i].toString())){
            //如果不存在 我们map上创建键值对
            map.set(charArr[i].toString(),[arr[i]])
            // 首次出现的单词结构 应该被存入结果map上创建的[](即键值对的值中)
            // console.log('本轮存入了'+charArr[i].toString()+'\n')
        }else{
            map.get(charArr[i].toString()).push(arr[i])
            // console.log('map中已经存在：'+charArr[i].toString()+'本次push的是'+arr[i]+'\n')
        }
        
        
    }
    return [...map.values()]
}


