var mergeTwoLists = function(l1, l2) {
    // Iterate through both l1 and l2. Assign the curr node the val of the lower
    // of the l1/l2 nodes. 
    
    let curr = head = new ListNode(0);
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }
    }
    if(l1) {
        curr.next = l1;
    }
    else {
        curr.next = l2;
    }
    return head.next;
};
