import React, { useCallback, useState } from "react";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import { ResumeList } from "../sample";
import { Link } from "react-router-dom";
import Apply from "../Components/Apply";
import ApplyInfo from "../Components/AppyInfo";

const Entire = styled.div`
    width: 100%;
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 800px;
    min-width: 900px;
    width: 100%;  
    grid-template-columns: 1fr 3fr;
    margin: 40px 0;
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
    border-bottom: 2px solid #718093;

    span {
        font-size: 16px;
        font-weight: bold;
        color: #2f3542;
    }
`;

const SortItem = styled.button`
    background-color: transparent;
    border: 0;
    
    span {
        font-size: 14px;
        font-weight: 540;
    }
`;

const Item = styled.button`
    width: 95%;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    margin: 10px 15px;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.lightgray};
    border-radius: 10px;

    span {
        font-size: 15px;
        font-weight: bold;
        color: ${(props) => props.theme.deepgray}
    }
`;


const Title = styled.h3`
  text-align: center;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

function MyPage() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
      setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    return (
        <Entire>
            <MainHeader/>
            <Main>
                {isOpenModal && ( 
                    <Apply onClickToggleApplyInfo={onClickToggleModal}>
                        <ApplyInfo/>
                    </Apply>
                )}
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
                        <Item onClick={onClickToggleModal}>
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
        </Entire>
    );
}

export default MyPage;