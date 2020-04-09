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

//插入
function inserAfter(node, newValue){
    var newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
}

inserAfter(node1,'d')


//删除 = nodeValue的某个值
function removeNode(root, nodeValue){
    if(!root || !root.next){
        //无法删除的情况 
        return
    }
    if(root.next.value ===nodeValue){
        //下一个节点就是要找的节点
        root.next = root.next.next;
    }else{
        removeNode(root.next,nodeValue)
    }
}