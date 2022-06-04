/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let count = 0;  
    
    //find the length of linked list
    while(current!=null) {
      count++;
      current = current.next;
    }
    
    // remove the node at specific index/position
    let pos = count - n + 1;
    let previous = null;
    let i = 1;
    current = head;
    while(i<pos) {
      i++;
      previous = current;
      current = current.next;
    }
    if(i == pos) {
      if(count != 1) {
        if(n == count) { // for removing the first node 
           head = head.next;
        } else {
           previous.next = current.next;
           current.next = null;
        }  
      } else head = null;     
    }   
    return head;
};



// best solution
var removeNthFromEnd = function(head, n) {
    let cur = head;
    let delNode = null;
    
    while(cur) {
        if(n > 0) {
            cur = cur.next;
            n--;
        } else {
            cur = cur.next;
            delNode = delNode ? delNode.next : head;
        }
    }
    if(delNode) delNode.next = delNode.next.next;
    else return head.next;
    return head;
};

