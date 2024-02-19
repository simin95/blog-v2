// js生成标准二叉树的工厂函数

// 例子，用于生成此结构的二叉树 ：
// 二叉树节点定义
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
node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
// console.log(node1)

// 配置用例如下：
const binaryTreeData = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 4,
                    children: [
                        {
                            val: 7,
                            children: [
                                null,
                                {
                                    val: 10
                                }
                            ]
                        },
                        null
                    ]
                },
                {
                    val: 5,
                    children: [
                        null,
                        {
                            val: 8
                        }
                    ]
                }
            ]
        },
        {
            val: 3,
            children: [
                {
                    val: 6,
                    children: [
                        {
                            val: 9
                        },
                        null
                    ]
                },
                null
            ]
        }
    ]
}

console.log('start -------------------------------------------------------------------------------- \n');

// 生成树的工厂函数，采用广度优先遍历
function makeBinaryTree(data) {
    // 初始化根节点
    const tree = new Node(data.val)

    data.children && data.children[0] ? tree.left = makeBinaryTree(data.children[0]) : null
    data.children && data.children[1] ? tree.right = makeBinaryTree(data.children[1]) : null

    return tree
}

console.log(makeBinaryTree(binaryTreeData));

console.log('\nend ----------------------------------------------------------------------------------');

