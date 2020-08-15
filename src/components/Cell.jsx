import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span`
    --size: ${({ gridSize }) => 80 / gridSize}vmin;
    width: var(--size);
    height: var(--size);
    display: block;
    border: 1px solid #FFFFFF44;
    ${({ alive }) => alive ? css`
        background: var(--dk-pink);
        border-color: var(--dk-pink);
    ` : ""};
`;

export default StyledSpan;