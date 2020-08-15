import React from 'react';
import Cell from './Cell';
import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    margin: auto;
    text-align: center;
    width: 80vmin;
    flex-direction: column;
`;

const StyledDiv = styled.div`
    display: flex;
`;

const Grid = ({ grid }) => {
    return (
        <StyledMain>
            {
                grid.map((row, rowIndex) =>
                    <StyledDiv key={rowIndex}>
                        {
                            row.map((value, cellIndex) =>
                                <Cell alive={value} gridSize={row.length} key={`${rowIndex}-${cellIndex}`} />
                            )
                        }
                    </StyledDiv>)
            }
        </StyledMain>
    );
};

export default Grid;