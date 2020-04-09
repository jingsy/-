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


//设置链表的某个值

/**
 *判断某个节点是否是我要找的节点
 *
 * @param {*} root  链表
 * @param {*} index 在什么下标设置
 * @param {*} value 你要设置的数据
 */
function setNode(root, index, value){
   function _setValue(node, i){
       if(!node) return;
       if(i===index){
           node.value = value
       }else{
           _setValue(node.next,i+1)
       }
   }
   _setValue(root,0)
}

//如打印 链表的下标为2的 即第三个节点
setNode(node1,2,"test")