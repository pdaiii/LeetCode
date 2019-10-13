class Node() {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

function breadthFirstSearch(startingNode, targetValue){
  let queue = [startingNode];
  let visited = {};
  while(!queue.empty()) {
    let node = queue.shift();
     
     // If we have visited the node before then check the next node in the queue.
     if(visited[node.val]) {continue;}
     else {
       if(node.val === targetValue){ return node; }
       else {
          node.neighbors.forEach(neighbor => {
            queue.push(neighbor);
          })
          visited[node.val] = true;
       }
     }
  }
  return null;
}
