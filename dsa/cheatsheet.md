# DSA Cheatsheet

## Binary Search

- Every time you see a problem that involves a sorted array, you should consider binary search.

## Sliding Window

- Be careful of using sliding window in an array with negative values; it doesn't work. Check out [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

## Tree + Heap

### Shortcuts
- Height of heap: `floor(log2(NUM_OF_NODES)) + 1`
- Number of leaves: `>= 0.5 * NUM_OF_NODES`
- If you're building a heap, the first leaf starts from `floor(NUM_OF_NODES / 2)`

> **Warning**
> Note difference between LEVEL and HEIGHT: If the HEIGHT of a tree is 3, the last LEVEL is referred to as 2 (0-based index)

- Max. number of nodes in a PERFECT binary tree: `2 ** HEIGHT - 1`
- Starting index of node given a certain level: `2 ** LEVEL - 1`
- Level given a certain node index: `floor(log2(INDEX + 1))`