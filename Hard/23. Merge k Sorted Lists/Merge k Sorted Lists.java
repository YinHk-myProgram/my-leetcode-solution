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
    
    public ListNode mergeKLists(ListNode[] lists) {
        
        LinkedList combineLists = new LinkedList(); //use linkedList to store the elements in ListNode[]
        
        for(ListNode list:lists) {
          ListNode current = list;
          while(current!=null) {
             combineLists.add(current.val); 
             current = current.next;
          }
               
        }
        Collections.sort(combineLists);        //sorting this list in asccending order
                                               
        //create a new Listnode obj 
        ListNode head = new ListNode();
        ListNode current = head;
        
        //generate a linked list with the sorted elements stored in combineLists
        while(!combineLists.isEmpty()) {
            
            int tempVal = (Integer) combineLists.pollFirst();
            current.next = new ListNode(tempVal);  //create a new list node obj 
            current = current.next; 
            
        }
        
        return head.next;    
    }
}

