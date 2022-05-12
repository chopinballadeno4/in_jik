import React from "react";
import styled from "styled-components";

function Home() {
    const Entire = styled.div`
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-rows: 187px 9fr 1fr;
    `;

    const Header = styled.header`
        padding-left: 0px;
        background-color: #ffffff;
        grid-row: 0 1;
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    `;

    const HeaderSearch = styled.div`
        width: 100vw;
        height: 134px;
    `;

    const HeaderMenu = styled.div`
        border-top: thin solid #e5e5e5;
        border-bottom: 3px solid #ffd203;
        width: 100vw;
        height: 50px;
    `;

    const Main = styled.main`
        background-color: #f7f7f7;
        grid-row: 1 2;
    `;

    const Bottom = styled.article`
        background-color: orange;
        grid-row: 2 3;
    `;


    return (
        <Entire>
            <Header>
                <HeaderSearch>
                </HeaderSearch>
                <HeaderMenu>
                </HeaderMenu>
            </Header>
            <Main>
                <h1>Main</h1>
            </Main>
            <Bottom>
                <h1>Bottom</h1>
            </Bottom>
        </Entire>
    );
}

export default Home;