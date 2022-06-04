import React from "react";
import styled from "styled-components";

const MainButton = styled.button`
    color: #f5f6fa;
    background-color: #45aaf2;
    border: 0;
    font-size: 18px;
    font-weight: bold; 
    width: 142px;
    height: 44px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);

    &:hover {
        cursor: pointer;
    }
`;

interface IText {
    text: string,
};

function SubmitButton({text} : IText) {
    return(
        <MainButton>
            {text}
        </MainButton>
    );
}

export default SubmitButton