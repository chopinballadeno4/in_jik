import React from "react";
import styled from "styled-components";
import SubHeader from "../Components/SubHeader";
import SubFooter from "../Components/SubFooter";

const Main = styled.main`
    width: 100vw;
    height: 100vh;

`;

function Signin() {
    return(
        <>
        <SubHeader/>
        <Main>
            <h1>Signin</h1>
        </Main>
        <SubFooter/>
        </>
    );
}

export default Signin;