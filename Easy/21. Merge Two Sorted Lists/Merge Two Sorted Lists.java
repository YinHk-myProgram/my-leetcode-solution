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

//merge two list node first
//then use Bubble Sorting, change vale inside the nodes only, don't change the reference variable-next 

class Solution {
    
    private int getVal(ListNode node) {
        return node.val;
    }
    
    private ListNode getNext(ListNode node) {
        return node.next;
    }
    
    private void setVal(ListNode node, int val) {
        node.val=val;
    }
    
    private void setNext(ListNode node, ListNode nextNode) {
        node.next=nextNode;
    }
    
    private void sortList(ListNode head) { 
        ListNode currentNode = head, nextNode = null;
        int tempVal;
        
        if(head==null) return;
         else { //iteration
            while(currentNode != null) {
              
              nextNode = getNext(currentNode);
              while(nextNode != null) {
                //If current node's val > next node's val, swap them by changing their val only
                if(getVal(currentNode) > getVal(nextNode)) {
                  tempVal =  getVal(nextNode);
                  setVal(nextNode, getVal(currentNode));
                  setVal(currentNode, tempVal);
                }
                nextNode = getNext(nextNode);
              }
              currentNode = getNext(currentNode);
            }
            
         }
     }
    
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        
        ListNode iterator = list1==null? null:new ListNode(list1.val, list1.next);
        ListNode list = list2==null? null:new ListNode(list2.val, list2.next);
        ListNode head = iterator;
        ListNode sortedNodes = head;
        
        if(list1==null ||list2==null) {
            if(list1==null && list2==null) return list1;
              else if(list1==null && list2!=null) return list2;
                else return list1;
        }else {
            
          while (getNext(iterator) != null){
            iterator = getNext(iterator);
          }
          setNext(iterator,list);
          sortList(head);
        
          return sortedNodes;
  
        }

    }
}
