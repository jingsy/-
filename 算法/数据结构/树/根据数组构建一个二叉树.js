var arr =[5,4,6,12,3,1]
function Node(value){
    this.value = value;
    this.left =null;
    this.right =null;
}

function addNode(root,num){
    if(root==null)return;
    if(root.value==num)return;
    if(root.value<num){
        if(root.right==null){
            root.right = new Node(num)
        }else{
            addNode(root.right,num)
        }
    }else{
        if(root.left==null){
            root.left = new Node(num)
        }else{
            addNode(root.left,num)
        }
    }
}
/**
 * 传入一个数组 返回一个二叉树
 * @param {*} arr 
 */
function buildSearchTree(arr){
    if(arr==null || arr.length ==0) return null;
    var root = new Node(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root
}

