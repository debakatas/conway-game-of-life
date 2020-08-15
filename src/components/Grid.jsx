import React, { useEffect, useRef, useState } from 'react';
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

const Grid = ({ grid, setGrid, playing }) => {
    const elem = useRef(null);
    const [clicking, setClick] = useState(false);


    return (
        <StyledMain ref={elem} onMouseDown={(e) => { e.preventDefault(); setClick(true); }} onMouseUp={() => setClick(false)}>
            {
                grid.map((row, rowIndex) =>
                    <StyledDiv key={rowIndex}>
                        {
                            row.map((value, cellIndex) =>
                                <Cell
                                    grid={grid}
                                    playing={playing}
                                    alive={value}
                                    key={`${rowIndex}-${cellIndex}`}
                                    clicking={clicking}
                                    row={rowIndex}
                                    column={cellIndex}
                                    setGrid={setGrid}
                                />
                            )
                        }
                    </StyledDiv>)
            }
        </StyledMain>
    );
};

export default Grid;