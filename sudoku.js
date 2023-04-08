//Overall function takes a sudoku grid and checks to see if each row, column, and 3x3 section of grid have each # 1-9 with no repeats
//I noticed my tab is 4 spaces currently in vs code, should I change it to 2?


//Gets row from grid at given idx, later fed i
function getRow(grid, idx) {
    let row = grid[idx];
    return row;
}
  
//Gets column from grid at given idx, later fed i
function getColumn(grid, idx) {
    let columnArr = [];

    for (let i=0; i<9; i++){

        let currentRow = grid[i];
        columnArr.push(currentRow[idx])
    }

    return columnArr;
}

//Gets section from grid at given idx x and y
function getSection(grid, x, y) {
    //I think this way of defining variables to iterate in the for loop may be nonsense... it works logically but I think there's a way to do this in fewer lines
    //Starts variables at either 0, 3, or 6 and goes up by 3 to get the 3x3 sections
    let startY = y * 3;
    let startX = x * 3;
    let endY = startY + 3;
    let endX = startX + 3;
    let section = [];

    //I tried saying i < i + 3 as the end condition but it started and infinite loop, which is why I changed to that^
    for (let i = startX; i < endX; i++){

        for (let j = startY; j < endY; j++){
            section.push(grid[i][j])
        }
    }

    return section;
}

//Checks an array to see if each value is unique
function includes1to9(arr) {
    //Uses set to see if the array is all unique values
    if (new Set(arr).size !== arr.length) {
        return false;

    } else {
        return true;
    }
}


//Puts everything together to see if each row, column, and 3x3 section all include 1-9 and each value is unique!
function sudokuIsValid(grid) {
    for (let i = 0; i < 9; i++) {
        // Get row and column at idx i
        let row = getRow(grid, i);
        let column = getColumn(grid, i);
  
        // Check if the row and column contain all values from 1 to 9
        if (!includes1to9(row) || !includes1to9(column)) {
        // The puzzle is not valid
            return false;
        }
    }
  
    // Check if each section contains all values from 1 to 9
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let section = getSection(grid, i, j);
  
            if (!includes1to9(section)) {
          // The puzzle is not valid
                return false;
            }
        }
    }
  
    // The puzzle is valid
    return true;
}

//Checks each x and y position on two matrices to see if the value is the same
function isSame(grid1, grid2) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid1[i][j] !== grid2[i][j]) {
            // The two grids are not the same
            return false;
            }
        }
    }
  
    return true;
}