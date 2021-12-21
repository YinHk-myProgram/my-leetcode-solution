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
    public ListNode swapPairs(ListNode head) {
        //initial nodes
        ListNode prevNode = (head!=null)? head:null;
        ListNode currNode = (head!=null)? head.next:null;
        ListNode firstNode = (head!=null)? head.next:null; //record the first node after swapping
        ListNode tempNode;
        
        if(prevNode != null && currNode !=null) { //for initial condition, current & previous != null
            
          while(currNode != null) { //null checking for current in every iteration
              
            tempNode = currNode.next; //store the following nodes
            currNode.next =prevNode; //break the chain, and link to previous node
            
            if(tempNode != null) {
               prevNode.next = tempNode.next; //swap and connect to next node
            }else {
               prevNode.next = null; 
            }
                
            if(tempNode !=null) {
               //iterate to next pair of nodes
               if(tempNode.next != null) {  //check for the last node in single
                 currNode = tempNode.next;
               }else {
                  prevNode.next = tempNode; //link the previous node to the last single node
                  break;
               } 
               prevNode = tempNode;
            }else break;
              
          }
            
        }else if(prevNode != null && currNode == null) return prevNode; //for initial condition, only current != null
        return firstNode; 
    }
}
