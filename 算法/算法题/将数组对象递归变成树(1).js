var arr = [{
    'id': 1,
    'pid': null,
    'name': '中国'
},
{
    'id': 2,
    'pid': 1,
    'name': '四川省'
},
{
    'id': 3,
    'pid': 2,
    'name': '成都市'
},
{
    'id': 5,
    'pid': 2,
    'name': '绵阳市'
},
{
    'id': 6,
    'pid': 2,
    'name': '泸州'
},
{
    'id': 4,
    'pid': 1,
    'name': '重庆'
},
]
function treeList(arr, pid) {
var tree = [];
var temp;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid == pid) {
        var obj = arr[i]
        temp = treeList(arr, arr[i].id);
        if (temp.length > 0) {
            obj.subset = temp
        }
        tree.push(obj)
    }
}
return tree;
}
console.log(treeList(arr))