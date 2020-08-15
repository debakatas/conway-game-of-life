import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { gridConstructor, checkNeighbors, deepClone } from '../utils';

const Title = styled.h1`
    text-align: center;
    color: var(--dk-pink);
    margin: 1.4rem;
    font-size: 1.3rem;
`;

const gridSize = 50;
const speed = 10;

const App = () => {
    const [grid, setGrid] = useState(gridConstructor(gridSize));
    const [gridGeneration, setGridGeneration] = useState(-2);

    const checkGrid = () => {

    };

    useEffect(
        () => {
            setGrid(
                (prevGrid) => {
                    const newGrid = [...prevGrid];

                    newGrid[0][1] = 1;
                    newGrid[1][2] = 1;
                    newGrid[2][0] = 1;
                    newGrid[2][1] = 1;
                    newGrid[2][2] = 1;

                    newGrid[gridSize - 1][2] = 1;
                    newGrid[gridSize - 2][1] = 1;
                    newGrid[gridSize - 3][0] = 1;
                    newGrid[gridSize - 3][1] = 1;
                    newGrid[gridSize - 4][2] = 1;

                    newGrid[12][18] = 1;
                    newGrid[12][19] = 1;
                    newGrid[12][13] = 1;
                    newGrid[13][15] = 1;
                    newGrid[12][12] = 1;


                    newGrid[1][gridSize - 3] = 1;
                    newGrid[2][gridSize - 2] = 1;
                    newGrid[3][gridSize - 1] = 1;
                    newGrid[3][gridSize - 2] = 1;
                    newGrid[4][gridSize - 3] = 1;

                    return newGrid;
                }
            );

            setTimeout(checkGrid, speed);
        },
        []
    );

    useEffect(() => {
        setGridGeneration(n => n + 1);

        const newGrid = deepClone(grid);

        for (let row = 0; row < grid.length; row += 1) {
            for (let column = 0; column < grid.length; column += 1) {
                const current = grid[row][column];
                const many = checkNeighbors({ row, column, grid });
                const isAlive = Number(many === 3 || (many === 2 && current));

                newGrid[row][column] = isAlive;
            }
        }

        const clear = setTimeout(() => {
            setGrid(
                newGrid
            );
        }, speed);

        return () => {
            clearTimeout(clear);
        };

    }, [grid]);

    return (
        <>
            <Title>
                🌵 Game of debakaLife {gridGeneration}
            </Title>
            <Grid grid={grid} />
        </>
    );
};

export default App;