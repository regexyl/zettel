class MaxHeap {
  constructor(arr) {
    this.heap = [];
    arr.forEach(this._heapifyDown);
  }

  add(element) {
    this.heap.push(element);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return 'Empty';

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return max;
  }

  peek() {
    return this.heap[0];
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _parent(index) {
    return Math.floor()
  }

  _leftChild(index) {}
  _rightChlild(index) {}

  _heapifyDown() {}
  _heapifyUp() {}
}
