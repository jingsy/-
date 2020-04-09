

var list = [['热', '冷', '冰'], ['大', '中', '小'], ['重辣', '微辣'], ['重麻', '微麻']];
 
// 输出所有维度的组合，如 [['热', '冷''], ['大', '中']]  => 热+大，热+中，冷+大，冷+中

console.log(compose(list));
//当时没有写出来，后面在网上看到的解答后修改了一下
function compose(list){
  var res = list.reduce( (result, property) => {
    return property.reduce( (acc, value) => {
        return acc.concat(result.map( ele => [].concat(ele, value)));
    }, []);
  });
  return res.map(arr=>arr.join('+'))
}