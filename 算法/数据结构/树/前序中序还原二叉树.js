/*
             a
            /  \
           c    b
          /  \ /  \
         f   g d   e
* */

let preOrder=['a','c','f','g','b','d','e'];
let inOrder= ['f','c','g','a','d','b','e'];

function Node(value){
    this.value=value;
    this.left=null;
    this.right=null;
}

function reStore(preOrder,inOrder){
    if(preOrder==null||inOrder==null||preOrder.length==0||inOrder.length==0||preOrder.length!==inOrder.length){
        return null
    }
    let root = new Node(preOrder[0]); // 得到树的根节点
    let index = inOrder.indexOf(root.value); //
    
    //获取前序遍历的左右子树
    let preOrderLeftTree = preOrder.slice(1,index+1);
    let preOrderRightTree = preOrder.slice(index+1,preOrder.length);

    //获取中序遍历的左右子树
    let inOrderLeftTree = inOrder.slice(0,index);
    let inOrderRightTree = inOrder.slice(index+1,inOrder.length);

    root.left = reStore(preOrderLeftTree,inOrderLeftTree);
    root.right = reStore(preOrderRightTree,inOrderRightTree);
    return root;
}

let test = reStore(preOrder,inOrder);
console.log(test);
