/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution; //fixme
  // loop n-times. 
  // let board = solution.rows();
  let boardBank = []; 
  let untouchRow = Array(n).fill(0); 
  
  for (let i =0; i < n; i++) { 
    let tempArray = untouchRow.slice(); 
    tempArray[i] = 1; 
    boardBank.push(tempArray.slice()); 
  }

  var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  
  var heapsPermute = function (array, output, n = array.length) {
    //n = n || array.length; // set n default to array.length
    if (n === 1) {
      output(array);
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, output, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
      }
    }
  };
  

  // For testing:
  var solve = function(input){
    var tempBoard = new Board(input);
    if(tempBoard.hasAnyRooksConflicts() === false){
      solution = tempBoard; 
    }
  }
  
  heapsPermute(boardBank, solve);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution), solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  // loop n-times. 
  // let board = solution.rows();
  let boardBank = []; 
  let untouchRow = Array(n).fill(0); 
  
  for (let i =0; i < n; i++) { 
    let tempArray = untouchRow.slice(); 
    tempArray[i] = 1; 
    boardBank.push(tempArray.slice()); 
  }

  var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  
  var heapsPermute = function (array, output, n = array.length) {
    //n = n || array.length; // set n default to array.length
    if (n === 1) {
      output(array);
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, output, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
      }
    }
  };
  

  // For testing:
  var solve = function(input){
    var tempBoard = new Board(input);
    if(tempBoard.hasAnyRooksConflicts() === false){
      solutionCount ++; 
    }
  }
  
  heapsPermute(boardBank, solve);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0; //fixme

  // loop n-times. 
  // let board = solution.rows();
  let boardBank = []; 
  let untouchRow = Array(n).fill(0); 
  
  for (let i =0; i < n; i++) { 
    let tempArray = untouchRow.slice(); 
    tempArray[i] = 1; 
    boardBank.push(tempArray.slice()); 
  }

  var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  
  var heapsPermute = function (array, output, n = array.length) {
    //n = n || array.length; // set n default to array.length
    if (n === 1) {
      output(array);
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, output, n - 1);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
      }
    }
  };
  

  // For testing:
  var solve = function(input){
    var tempBoard = new Board(input);
    if(tempBoard.hasAnyQueensConflicts() === false){
      solutionCount ++; 
    }
  }
  
  heapsPermute(boardBank, solve);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionCount));
  return solutionCount;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
