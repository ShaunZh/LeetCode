## Tyeps of binary-tree
1. Perfect Binary Tree
2. Complete Binary Tree


### Perfect Binary Tree

A Binary tree is a Perfect Binary Tree in which all the internal nodes **have two children** and **all leaf nodes are at the same level** . 

For example, the binary tree below in which all leaf nodes are at same level, and each internal node has two children. 
                *
            *       *
          *   *   *   *

### Complete Binary Tree
A Binary Tree is a Complete Binary Tree if all the levels are completely filled except possibly the last level and the last level has all keys as left as possible.

A complete binary tree is just like a full binary tree, but with two major differences:

* Every level except the last level must be completely filled.
* All the leaf elements must lean towards the left.
* The last leaf element might not have a right sibling i.e. a complete binary tree doesn’t have to be a full binary tree.

For example, the binary tree below is a complete binary tree.
                *
            *       *
          *    *

### Balance Binary Tree
A balanced binary tree is called AVL tree( *Adelson-Velsky and Landis* ). It's a binary tree structure in which the left and right subtrees of every node differ in height (the number of edges from the top-most node to the farthest node in a subtree) by no more than 1 (or the skew is no greater than 1).[22] One may also consider binary trees where no leaf is much farther away from the root than any other leaf. (Different balancing schemes allow different definitions of "much farther".[23])