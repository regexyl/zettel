const parent = [...Array(n)].map((_, i) => i);
const sz = Array(n).fill(1);

function root(x) {
  if (x === parent[x]) return x;

  parent[x] = root(parent[x]);
  return parent[x];
}

function join(x, y) {
  const x = root(x),
    y = root(y);

  if (x === y) return;

  if (sz[x] > sz[y]) {
    [sz[x], sz[y]] = [sz[y], sz[x]];
  }
  
  parent[x] = y;
  sz[y] += sz[x];
}
