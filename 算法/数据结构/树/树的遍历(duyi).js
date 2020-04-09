/**
 *          a
 *         /  \
 *         b   c
 *        / \ / \
 *       d  e f  g
 * 前序遍历： a-b-d-e-c-f-g
 * 中序遍历：d-b-e-a-f-c-g
 * 后序遍历：d-e-b-f-g-c-a
 */
function Tree(value){
    this.value=value;
    this.left=null;
    this.right=null;
}
let a = new Tree('a')
let b = new Tree('b')
let c = new Tree('c')
let d = new Tree('d')
let e = new Tree('e')
let f = new Tree('f')
let g = new Tree('g')

a.left =b;
a.right=c;
b.left=d;
b.right=e;
c.left=f;
c.right=g;

function printTreeNode(root){
    if(root==null) return;
    console.log(root.value);
    printTreeNode(root.left)
    printTreeNode(root.right);
}
printTreeNode(a);