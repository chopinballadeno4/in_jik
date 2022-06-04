import React from "react";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import { ResumeList } from "../sample";
import { Link } from "react-router-dom";

const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 800px;
    width: 100%;  
    grid-template-columns: 1fr 3fr;
    margin: 40px 20px;
`;

const Menu = styled.nav`
    background-color: ${(props) => props.theme.white};
    border-right: ${(props) => props.theme.lightgray};
`;

const MenuLi = styled.li`
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) => props.theme.white1};
    padding: 25px 50px;
    border: 1px solid ${(props) => props.theme.lightgray};
`;

const List = styled.nav`
    width: 700px;
    height: 800px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white1};
    border: 1px solid ${(props) => props.theme.lightgray};
`;

const Sort = styled.div`
    width: 95%;
    height: 50px;
    margin: 10px 20px;
    display: flex;
    justify-content: flex-end;
`;

const SubTitle = styled.section`
    margin: 10px;
    padding: 0 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #596275;

    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const SortItem = styled.button`
    background-color: transparent;
    border: 0;
    
    span {
        font-size: 16px;
        font-weight: 540;
    }
`;

const Item = styled(Link)`
    display: flex;
    justify-content: space-between;
    padding: 18px;
    margin: 10px 15px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    border-bottom: 1px solid ${(props) => props.theme.lightgray};
    border-radius: 10px;

    span {
        font-size: 15px;
        font-weight: bold;
        color: ${(props) => props.theme.deepgray}
    }
`;

function MyPage() {
    return (
        <>
        <MainHeader/>
        <Main>
            <Menu>
                <ul>
                    <MenuLi
                    style={{
                        backgroundColor: "#0097e6",
                        color: "f7f7f7"
                        }}><span>지원목록</span></MenuLi>
                    <MenuLi><span>개인설정</span></MenuLi>
                    <MenuLi><span>쪽지함</span></MenuLi>
                </ul>
            </Menu>
            <List>
                <Sort>
                    <SortItem>
                        <span>⇅ 정렬기준</span>
                    </SortItem>
                </Sort>
                <SubTitle>
                    <span>no</span>
                    <span>이름</span>
                </SubTitle>
                <ul>
                    {ResumeList.map(element =>
                    <Item
                    to="/"
                    style={{textDecorationLine: "none"}}>
                        <span
                        style={{
                            color: "black",
                        }}>{element.id}</span>
                        <span>{element.title}</span>
                        <span>{element.name}</span>
                    </Item>
                    )}
                </ul>
            </List>
        </Main>
        <MainFooter/>
        </>
    );
}

export default MyPage;