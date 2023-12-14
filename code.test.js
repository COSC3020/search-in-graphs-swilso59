const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js' + '');

const adjList = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B', 'H'],
    'F': ['C'],
    'G': ['C'],
    'H': ['E']
};

const startNode = 'G';
const targetNode = 'Z';

// Call the depthFirstSearch function with the provided graph and nodes
const path = depthFirstSearch(graph, startNode, targetNode);

// Validate and display the result
if (path.length > 0 && path[path.length - 1] === targetNode) {
    console.log(`Path from ${startNode} to ${targetNode}: ${path.join(' -> ')}`);
} else {
    console.log(`No valid path found from ${startNode} to ${targetNode}`);
}
