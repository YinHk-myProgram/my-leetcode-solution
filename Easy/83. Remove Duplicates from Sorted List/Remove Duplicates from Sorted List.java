/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    ListNode prev;
    ListNode current;
    
    public ListNode deleteDuplicates(ListNode head) {
        current = head;
        prev = null;
        
        while(current !=null) {
            if(prev!=null) {
              if(prev.val==current.val) {
                  ListNode temp = current.next;
                  current.next = null;
                  prev.next = temp;
                  current = temp;
              }else {
                prev = current;
                current = current.next;
              }    
            }else {
                prev = current;
                current = current.next;
            }
        }
        return head;
    }
    
}
