/*
             a
            /  \
           c    b
          /  \ /  \
         f   g d   e
* */
let inOrder= ['f','c','g','a','d','b','e'];
let postOrder= ['f','g','c','d','e','b','a']

function Node(value){
    this.value=value;
    this.left=null;
    this.right=null;
}

function reStore(inOrder,postOrder){
    if(postOrder==null||inOrder==null||postOrder.length==0||inOrder.length==0||postOrder.length!=inOrder.length){
        return null
    }
    let root = new Node(postOrder[postOrder.length-1]);
    let index = inOrder.indexOf(root.value);

    let inOrderLeftTree = inOrder.slice(0,index);
    let inOrderRightTree = inOrder.slice(index+1,inOrder.length);

    let postOrderLeftTree = postOrder.slice(0,index);
    let postOrderRightTree = postOrder.slice(index, postOrder.length-1);

    root.left = reStore(inOrderLeftTree,postOrderLeftTree)
    root.right = reStore(inOrderRightTree,postOrderRightTree)
    return root
}

let test = reStore(inOrder,postOrder)
console.log(test);

