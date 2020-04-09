
/*
             a
            /  \
           c    b
          /  \ /  \
         f   g d   e
* */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

let deepSearch = (root,target)=> {
    if(root == null) return false;
    if(root.value == target) return true;
    let left = deepSearch(root.left,target);
    let right = deepSearch(root.right,target);
    return left || right;
}

let res = deepSearch(a,'aa')
console.log(res);

//非递归
let dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if(node.right) stack.push(node.right); // 先压入右子树
        if(node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}
