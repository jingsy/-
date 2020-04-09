
function binarySearchTree(root, target){
    if(root == null) return false;
    if(root.value == target) return true;
    if(root.value>target){
        return binarySearchTree(root.left, target)
    }else{ 
        return binarySearchTree(root.right, target)
    }
}