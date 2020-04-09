
function NodeList(value){
    this.value=value;
    this.next = null;
}

let one = new NodeList('1')
let two = new NodeList('2')
let three = new NodeList('3')
let four = new NodeList('4')
let five = new NodeList('5')

one.next = two;
two.next=three;
three.next=four;
four.next=five;


function removeNthFromEnd(head,n){
    let dummy = new NodeList('0');
    dummy.next = head;
    let length = 0;
    let first = head;
    while(first !==null){
        length++;
        first = first.next
    }
    //找到第L-n个节点
    length -= n;
    //从哑节点开始遍历
    first = dummy;
    //移动到倒数第n个节点的前一个节点
    while(length > 0){
        length --;
        first = first.next;
    }
    //删除第n个节点
    first.next = first.next.next
    //返回链表第一个节点
    return dummy.next
}
let res = removeNthFromEnd(one,2);

function bianli(node){
    while(node !==null){
        console.log(node.value);
        node = node.next
    }
}
bianli(res);
