import React from "react";
import styled from "styled-components";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";

const Main = styled.main`
    width: 100%;
    background-color: ${(props) => props.theme.white};
    
`;

const MainNav = styled.nav`
    width: 10%;
    min-height: 500px;
    background-color: ${(props) => props.theme.white1};
    border-right: 1px solid ${(props) => props.theme.lightgray}; 
`;

const MainNavLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height:60px;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme.lightgray};
`;


function SearchInfo() {
    return (
        <>
        <MainHeader/>
        <Main>
            <MainNav>
                <ul>
                    <MainNavLi>통합검색</MainNavLi>
                    <MainNavLi>채용</MainNavLi>
                    <MainNavLi>인턴</MainNavLi>
                    <MainNavLi>아르바이트</MainNavLi>
                </ul>
            </MainNav>
        </Main>
        <MainFooter/>
        </>
    );
}

export default SearchInfo;