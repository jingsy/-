/**
 * 单链表排序
 *  输入: 4->2->1->3
    输出: 1->2->3->4
 * @param 
 * {问题一: 如何确认链表的中点?
    问题二: 链表如何 merge?
针对问题一, 可以使用快慢指针来确认链表的中点, 快指针每次走两步, 慢指针每次走一步, 
慢指针最后的位置就是链表的中点位置, 步骤图解如下:

此外另外一个难点是如何进行 merge 操作。大体思路为
  1.在 leftList 中找到比 rNode 小且最接近 rNode 的值 lNode;
  2.将 rNode 插入 lNode 的后面;
} head 
 */

var sortList = function(head) {
    const dummy = new ListNode(0)
    dummy.next = head
    let head0 = dummy.next//这步没用
  
    let slow = dummy, quick = dummy
    while (quick.next) {
      quick = quick.next
      slow = slow.next
      quick.next && (quick = quick.next)
    }
    // if the slow list is equal to the quick list, it means the current list only has one node.
    if (slow === quick) return dummy.next
    let rightList = slow.next
    slow.next = null
    let leftList = dummy
    return merge(sortList(leftList.next), sortList(rightList))
  }
  
  var merge = function(leftList, rightList) {
    const dummy = new ListNode(0)
    dummy.next = leftList
    let lNode = dummy
    let rNode = rightList
  
    while (lNode && rNode) {
      while (lNode.next && lNode.next.val < rNode.val) {
        lNode = lNode.next
      }
      let rNext = rNode.next
      rNode.next = lNode.next
      lNode.next = rNode
      rNode = rNext
    }
    return dummy.next
  }
