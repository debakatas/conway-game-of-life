export const gridConstructor = (size) => {
    const baseGrid = [];
    for (let row = 0; row < size; row += 1) {
        baseGrid[row] = [];
        for (let column = 0; column < size; column += 1) {
            baseGrid[row][column] = 0;
        }
    }

    return baseGrid;
};

const inLimit = (min, max, value) => Math.min(Math.max(min, value), max);

export const checkNeighbors = ({ row, column, grid }) => {
    let count = 0;

    const min = 0;
    const max = grid.length - 1;

    const minRow = inLimit(min, max, row - 1);
    const maxRow = inLimit(min, max, row + 1);

    const minColumn = inLimit(min, max, column - 1);
    const maxColumn = inLimit(min, max, column + 1);

    for (let nRow = minRow; nRow <= maxRow; nRow += 1) {
        for (let nColumn = minColumn; nColumn <= maxColumn; nColumn += 1) {
            count += grid[nRow][nColumn];
        }
    }

    count -= grid[row][column];

    return count;
};

export const deepClone = (matrix) => matrix.map(array => [...array]);