var deleteDuplicates = function (head) {
    if (head == null) return null
    var node = head
    while (node.next != null) {
        if (node.val == node.next.val) {
            node.next = node.next.next;
        }else{
            node = node.next
        }
    }
    return head
}
//d递归
// class Solution {
//     public ListNode deleteDuplicates(ListNode head) {
//         if (head == null) {
//             return null;
//         }
//         if (head.next == null) {
//             return head;
//         }
//         if (head.val == head.next.val) {
//             head = deleteDuplicates(head.next);
//         } else {
//             head.next = deleteDuplicates(head.next);
//         }
//         return head;
//     }
// }