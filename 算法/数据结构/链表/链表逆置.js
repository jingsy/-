function NodeList(val){
    this.val=val;
    this.next=null;
}
var node1 = new NodeList(1)
var node2 = new NodeList(2)
var node3 = new NodeList(3)
var node4 = new NodeList(4)
var node5 = new NodeList(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function nodeReverse(root){
    if(!root || !root.next) return
    if(root.next.next==null){ //代表当前节点是倒数第二个节点
        root.next.next = root
        //我们要return最后一个节点，在新的链表里，
        //只有通过最后一个节点，我们才能找到前面的节点
        //root.next就是最后一个节点
        return root.next
    }else{
        //拿到一个结果
        var result = nodeReverse(root.next);
        //拿到结果先不动 先把指向转过来 再return result
        root.next.next=root;
        root.next =null 
        return result
    }
}

//将node1传入并得到翻转的新链表
var reverseRes = nodeReverse(node1);

//打印翻转后的新链表
printNodeList(reverseRes);
function printNodeList(root){
    if(root==null) return ;
    console.log(root.val);
    return printNodeList(root.next);
}


