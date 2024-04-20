import styled from "styled-components";

const StyledButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #eee;
    }
`;

export const RedButton = styled(StyledButton)`
    background-color: red;
`;

export const BlueButton = styled(StyledButton)`
    background-color: red;
`;
