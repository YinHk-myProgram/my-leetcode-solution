/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   var list = new ListNode(0);
    var result = list; // 使用一個ListNode來儲存相加的結果

    add(l1,l2,0);
    return result.next;

    function add(l1,l2,gap){
        var sum = 0;
        if(l1 === null && l2 === null && gap === 0){
            return 0;
        } 

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        } 

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += gap;
        list.next = new ListNode(sum%10);
        gap = parseInt(sum/10);     //this will remove decimal and return the carry number for next recursion
        list = list.next;
        add(l1,l2,gap);
    }
   
};



// 195: 5->9->1, 321:  1->2->3
// sum = 1+5 = 6, -> store 6
// sum = 9+2 = 11 -> store 1, and carry 1
// sum = 1+3 = 4 -> store 4+ 1 = 5
