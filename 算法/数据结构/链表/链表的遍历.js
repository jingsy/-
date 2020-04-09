function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
node1.next = node2;
node2.next = node3

function bianLink(root) {
    var temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break
        }
        temp = temp.next
    }
}
bianLink(node1)