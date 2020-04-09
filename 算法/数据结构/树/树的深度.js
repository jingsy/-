
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

var maxDepth = function(root) {
    if (root === null) { //注意等号
        return 0;
    } else {
        var leftDepth = maxDepth(root.left),
            rightDepth = maxDepth(root.right);

        var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;

        return childDepth + 1;//根节点不为空高度至少为1
    }
};


/** 解法二：迭代（基于栈）DFS
不断边压栈边出栈
先两边边开始分别都压一个
并先返回一边 剩下的出栈就都是另一边 即一次只出栈一个节点即可实现
每次出栈取高度的最大值，初始化root根节点高度为1 就不用再加1了
返回更新的高度最终确定比较值
*/

var maxDepth = function(root) {
    var tmpStack = [
        {"key":root,"val":1}
    ];
    var depth = 0;
    while(tmpStack.length != 0){
        var currObj = tmpStack.pop();
        var currNode = currObj.key;
        if(currNode != null){
            var currNode_depth = currObj.val;
            depth = Math.max(depth,currNode_depth);
            if(currNode.left != null){
                tmpStack.push({"key":currNode.left,"val":currNode_depth + 1});
            }
            if(currNode.right != null){
                tmpStack.push({"key":currNode.right,"val":currNode_depth + 1});
            }
        }
    }
    return depth;
};
