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

function push(root, newValue){
    if(!root.next){
        //已经是最后一个节点
        var newNode = new Node(newValue)
        root.next = newNode
        return
    }
    return push(root.next, newValue)
}
