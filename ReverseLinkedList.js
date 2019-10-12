var reverseList = function(head) {
    let prev = null
    while(head) { // 2, 3, 4
        let next = head.next; // 3, 4, 5, null
        head.next = prev; // 2->1 3->2 4->3 5->4
        prev = head; // 2, 3, 4, 5
        head = next; // 3, 4, 5, null
    }
    return prev;
};
