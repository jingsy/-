//打印链表的第i个节点

function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
node1.next = node2;
node2.next = node3;
node3.next = node4;


/**
 *判断某个节点是否是我要找的节点
 *
 * @param {*} root 输入一个链表
 * @param {*} index 要查找的索引
 */
function getNode(root, index){
    /**
      * @param {*} node 当前节点
      * @param {*} i 当前节点的索引
     */
    function _getValue(node,i){
        if(!node) return null;
        if(i===index) return node;
        return _getValue(root.next,i+1)
    }
    return _getValue(root,0)
}

//如打印 链表的下标为2的 即第三个节点
console.log(getNode(node1,2))