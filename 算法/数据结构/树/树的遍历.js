//定义一棵树
var tree = {
    val: 1,
    left: {
        val:2,
        left: {
            val:4
        },
        right:{
            val:5
        }
    },
    right: {
        val:3,
        left: {
            val:6
        }
    }
}
 // console.log(perOrderRecursive(tree))
// console.log(midOrderRecursive(tree))
// console.log(lastOrderRecursive(tree))
console.log(preOrder(tree))
// console.log(midOrder(tree))

// 递归
//先序遍历
function  perOrderRecursive(root) {
    if(!root){
        return null
    }
    console.log(root.val)
    perOrderRecursive(root.left);
    perOrderRecursive(root.right);
}
//中序遍历
function  midOrderRecursive(root) {
    if(!root){
        return null
    }
    midOrderRecursive(root.left);
    console.log(root.val)
    midOrderRecursive(root.right);
}
//后序遍历
function  lastOrderRecursive(root) {
    if(!root){
        return null
    }
    lastOrderRecursive(root.left);
    lastOrderRecursive(root.right);
    console.log(root.val)
}

// 非︿(￣︶￣)︿递归
function preOrder(root) {
    if(!root){
        return null
    }
    var stack = [];
    var tmpNode = root;
    while (tmpNode || stack){
        while (tmpNode){
            console.log(tmpNode.val);
            stack.push(tmpNode)
            tmpNode = tmpNode.left
        }
        //左边完了 切换到右边
        var node = stack.pop();
        tmpNode = node.right;
    }
}

/**
 * 先一直沿着“左孩子方向”不断地走，当走到了最左下结点时（第9行while不成立），准备出栈，访问该结点。(第15行if语句)
当出栈访问完该结点(第18、19行)之后，切换到该结点的左孩子的“子树”中，
回到第6行大循环，与前面一样，继续对该“子树”先沿着“左孩子方向”不断地走....
 * @param {*} root 
 */
function midOrder(root) {
    if(!root){
        return null
    }
    var stack = [];
    var tmpNode = root;
    while (tmpNode || stack){
        while (tmpNode){
            stack.push(tmpNode)
            tmpNode = tmpNode.left
        }
        var node = stack.pop();
        console.log(tmpNode.val);
        tmpNode = node.right;
    }
}


var postorderTraversal = function(root) {
    let nodestack = [];
    let res = [];
    if(root===null){
        return [];
    }
    nodestack.push(root);
    while(nodestack.length>0){
        let node = nodestack.pop();
        res.unshift(node.val);
        if(node.left){
            nodestack.push(node.left);
        }
        if(node.right){
            nodestack.push(node.right);
        }
    }
    return res;
}