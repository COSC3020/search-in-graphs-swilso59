const fs = require('fs');
const jsc = require('jsverify');

// Assuming 'code.js' contains the implementation of depthFirstSearch
eval(fs.readFileSync('code.js', 'utf-8'));

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

// Property-based testing using jsverify
const test = jsc.property('Depth First Search should find a valid path or return an empty array', () => {
    const path = depthFirstSearch(adjList, startNode, targetNode);
    
    // Ensure that the path is valid (either empty or ending at the target node)
    return path.length === 0 || path[path.length - 1] === targetNode;
});

jsc.assert(test);

// Optionally, log the result of the test
if (test) {
    console.log('Property-based test passed!');
} else {
    console.log('Property-based test failed!');
}
