function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map(row => row.map(col => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!visited[i][j]) {
        traverseNode(i, j, matrix, visited, sizes);  
  }}}    
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  currentRiverSize = 0;
  nodesToExplore = [[i, j]];
  while (nodesToExplore.length > 0) {
    currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = true;
    if (matrix[i][j] == 0) {
      continue;
    }
    currentRiverSize++;
    let unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (let k in unvisitedNeighbors) {
      nodesToExplore.push(unvisitedNeighbors[k]);
  }}
  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  if (j < matrix[i].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
