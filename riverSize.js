function riverSizes(matrix) {
  let sizes = [];
  let visited = new Array(matrix[0].length).map(e => Array(...matrix).fill(false));
  console.log(matrix);
  console.log(visited);
  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (!visited[i][j]) {
        traverseNode(i, j, matrix, visited, sizes);  
  }}}    
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  currentRiverSize = 0;
  nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
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
    unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (let neighbor in unvisitedNeighbors) {
      nodesToExplore.append(neighbor);
  }}
  if (currentRiverSize > 0) {
    sizes.append(currentRiverSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.append([i - 1, j]);
  }
  console.log(visited);
  if (i < matrix.length && !visited[i + 1][j]) {
    unvisitedNeighbors.append([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.append([i, j - 1]);
  }
  if (j < matrix.length && !visited[i][j + 1]) {
    unvisitedNeighbors.append([i, j - 1]);
  }
  return unvisitedNeighbors;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
