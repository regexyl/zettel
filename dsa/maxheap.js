/**
 * PROPERTIES OF HEAP
 *
 * Height of heap: floor(log2(NUM_OF_NODES)) + 1
 * Number of leaves: >= 0.5 * NUM_OF_NODES
 * If you're building a heap:
 *  - The first leaf starts from floor(NUM_OF_NODES / 2).
 * 
 * ! Note difference between LEVEL and HEIGHT
 * ! If the HEIGHT of a tree is 3, the last LEVEL is referred to as 2 (0-based index)
 * 
 * Max. number of nodes in a PERFECT binary tree: 2 ** HEIGHT - 1
 * Starting index of node given a certain level: 2 ** LEVEL - 1
 * Level given a certain node index: floor(log2(INDEX + 1))
 */

class MaxHeap {
  constructor(values) {
    this.values = this._buildHeap(values);
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  heapifyDown(index) {
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        largestIndex = index;

      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }

      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  heapifyUp(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);

    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }

  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }

  peek() {
    return this.values[0];
  }

  extractMax() {
    if (this.values.length < 1) return 'Heap is empty';

    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown(0);

    return max;
  }

  _buildHeap(array) {
    this.values = array;

    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // ****** UTILITY ******

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log('PARENT:', this.values[i]);
      console.log('LEFT CHILD:', this.values[this.leftChild(i)]);
      console.log('RIGHT CHILD:', this.values[this.rightChild(i)]);
      i++;
    }
  }

  /** 
   * Basically print() but in a tree form:
   *            9
   *       /         \             (9)
   *      5           8
   *    /   \       /   \          (3-7)
   *   4     1     3     2 
   *  / \   / \   / \   / \        (1-3)
   * 2   1 0   3 4   5 7   6
   * 
   * Follow-up: What if there are negative values in the heap?
   * Can you re-adjust the tree so that the branches align?
   */
  // printTree() {
  //   const height = this.height()
  //   let currLevel = height - 1;
  //   let spacesBetweenChildren = 3;
  //   let prevLevelStartingIndex = null;

  //   while (currLevel > 0) {
  //     const numOfLevelsFromBottom = height - currLevel + 1;
  //     const currLevelStartingIndex = this.startingIndexAtLevel(currLevel);
  //     let output = '';

      
  //     console.log(output);
  //     prevLevelStartingIndex = currLevelStartingIndex;
  //     currLevel--;
  //   }

  //   console.log(`${}`)
  // }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    const position = index * 2 + 1;
    return position >= this.values.length ? null : position;
  }

  rightChild(index) {
    const position = index * 2 + 2;
    return position >= this.values.length ? null : position;
  }

  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }

  height() {
    return Math.floor(Math.log2(this.values)) + 1;
  }

  // Level has a 0-based index
  startingIndexAtLevel(level) {
    return level === 0 ? 0 : level ** 2 - 1;
  }
}

const heap = new MaxHeap([4, 7, 3, 9, 1]);
console.log(heap.print())