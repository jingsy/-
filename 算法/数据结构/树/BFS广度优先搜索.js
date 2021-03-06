
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

function f1(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    var childList = [];//当前层所有节点的子节点，都在这个list中，这样传入下一层级的时候，就可以遍历整个层级的节点。
    for (var i = 0 ; i < rootList.length ; i ++) {
        if (rootList[i] != null && rootList[i].value == target) {
            return true;
        } else {
            // childList.unshift()
            childList.push(rootList[i].left);
            childList.push(rootList[i].right);
        }
    }
    return f1(childList, target);
}


// console.log(f1([a], "a"));


//非递归算法
function bfs(node) {
    let result = [];
    let queue = [];
    queue.push(node);
    let pointer = 0;
    while(pointer < queue.length) {
        let node = queue[pointer++]; // // 这里不使用 shift 方法（复杂度高），用一个指针代替
        console.log(node.value);
        
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}

//层序遍历的打印结果
console.log(bfs(a));
