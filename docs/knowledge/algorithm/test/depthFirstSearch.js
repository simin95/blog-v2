function Node(num) {
    this.val = num
    this.left = null
    this.right = null
}
// 生成二叉树：1-2 1-3 3-4 3-5
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)
var node7 = new Node(7)
var node8 = new Node(8)
var node9 = new Node(9)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7
node4.left = node8
node5.right = node9
// console.log(node1)
// 广度优先遍历结果 ： 1-2-3-4-5-6-7-8-9
// 深度优先遍历结果 ： 1-2-4-8-5-9-3-6-7

console.log('start');

function depthFirstSearch(node) {
    let result = [node.val]
    node.left ? result = [...result, ...depthFirstSearch(node.left)] : null
    node.right ? result = [...result, ...depthFirstSearch(node.right)] : null
    return result
}
console.log(depthFirstSearch(node1))


console.log('end');

