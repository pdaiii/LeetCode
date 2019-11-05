/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1->2->2->1
// slow: 2 
// reverse(slow): null<-2<-1

// 1->2->3->2->1
// slow: 3
// reverse(slow): null<-3<-2<-1
// fast: 1->2->3->2->1

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow = reverse(slow);
    fast = head;
    
    while(slow) {
        if(slow.val != fast.val) return false;
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};

function reverse(head) {
    let curr = head;
    let prev = null;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
