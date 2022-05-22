import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "../Scss/_bundle.scss";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Header

const UlParent = styled.ul`
    list-style: none;
    margin: 0;

    li {
        float: left;
        button {
            background-color: transparent;
            padding: 0;
            border: 0;
        }
    }
`;

const Entire = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 187px 2400px 250px;
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
    margin: 0 auto;
    width: 46vw;
    height: 134px;
    position: relative;
`;

const HeaderSearchUser = styled.div`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 46vw;
    height: 30px;

`;

const HeaderSearchUserSign = styled(UlParent)`
    li {
        margin: 5px 5px;
        float: left;
        button {        
            /* outline: 0; */
            &:hover {
                opacity: 0.5;
            }
            span {
                color : #222
            }
        }
    }
`;

const HeaderSearchinput = styled.div`
    display: flex;
    position: relative;
    //justify-content: space-between;
    width: 46vw;
    height: 104px;
    button {
        position: absolute;
        margin-left: 0;
        padding: 0;
        background-color: transparent;
        border: 0;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
        img {
            margin-left: 0px;
            width: 170px;
            height: 104px;
        }
    }
`;

const HeaderSearchinputBox = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    input {
        &:first-child {
            width: 422px;
            height: 40px;
            border: 3px solid #00a8ff;
        }
        &:last-child {
            margin-left: 5px;
            margin-top: 5px;
            background: transparent;
            background-image: url("img/searchicon.png");
            background-size: 100% 100%;
            width: 35px; height: 35px;
            border: 0;
            &:hover{ cursor: pointer }
            
        }
    }
`;

const HeaderMenu = styled.div`
    border-top: thin solid #e5e5e5;
    border-bottom: 5px solid #1e90ff;
    
`;

const HeaderMenudiv = styled.div`
    width: 46vw;
    height: 50px;
    margin: 0 auto;
`;

const HeaderMenuitems = styled(UlParent)`
    height: 50px;
    display: flex;
    position: relative;
    z-index: 101;
    justify-content: flex-end;
    align-items: center;
    li {
        margin: 10px 10px;
        button {
            &:hover {
                cursor: pointer;
            }
            span {
                font-size: 17px;
                font-weight: 600;
            }
        }       
    }
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Main 
const Main = styled.main`
    width: 70vw;
    margin: 0 auto;
    background-color: #f7f7f7;
    grid-row: 1 2;
    display: grid;
    grid-template-rows: 1fr 16fr 9fr 7fr;
`;

const MainHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    background-color: yellow;
`;

const MainHeaderName = styled.span`
    font-size: 20px;
    background-color: gray;
`;

const MainBrand = styled.div`

`;

const FullTimeElement = styled.div`
    width: 350px;
    height: 300px;
    margin: 20px;
    background-color: ${(props) => props.theme.mainbgcolor};
`;
//━━━━━━━━━
const MainFullTime = styled.section`
    background-color: green;

`;

const MainFullTimeList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`;
//━━━━━━━━━
const MainPartTime = styled.section`
    background-color: pink;
    //grid-row: 3 4;
    
`;

const MainPartTimeList = styled.ul`
    
`;
//━━━━━━━━━
const MainIntern = styled.section`
    background-color: blue;

    
`;

const HomeInternList = styled.ul`
    
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Buttom
const Bottom = styled.footer`
    background-color: #ffffff;
    grid-row: 2 3;
`;

const Bottomnav = styled.div`
    height: 50px;
    border-top: 2px solid #1e90ff;
    border-bottom: thin solid #e5e5e5;
`;

const BottomInfo = styled(UlParent)`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        margin: 0 30px;
        float: left;
        button {
            &:hover {
                opacity: 0.5;
            }
            span {
                font-size: 15px;
                color : #222;
            }
        }
    }
`;

const BottomContact = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    margin-top: 20px;
    button {
        margin-top: 28px;
        padding: 0;
        border: 0;
        background-color: transparent;
    }

    ul {
        list-style: none;
        li {
            color : #7f8c8d;
        }
    }

`;

function Home() {
    // useEffect(() => {
    //     ()();
    // }, []);


    const toSignIn = () => {

    }

    const toSignUp = () => {

    }

    const reload = () => {

    }

    const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
    }

    const toResume = () => {

    }

    const toPost = () => {

    }

    return (
        <Entire>
            <Header>
                <HeaderSearch>
                    <HeaderSearchUser>
                        <HeaderSearchUserSign>
                            <li>
                                <button onClick={toSignIn}>
                                    <span>로그인</span>
                                </button>
                            </li>
                            <li>
                                <span style={{opacity: 0.2}}>│</span>
                            </li>
                            <li>
                                <button onClick={toSignUp}>
                                    <span>회원가입</span>
                                </button>
                            </li>
                        </HeaderSearchUserSign>
                    </HeaderSearchUser>
                    <HeaderSearchinput>
                            <button onClick={reload}>
                                <img src="img/injiklogo.png" alt="로고"></img>
                            </button>
                            <HeaderSearchinputBox>
                                <input type="text" placeholder="검색어" onChange={inputChange} autoFocus/>
                                {/* <input type="image" src="img/searchicon.png" name="Submit" value="Submit" alt="버튼이미지"/> */}
                                <input type="submit" value=""/>
                            </HeaderSearchinputBox>
                    </HeaderSearchinput>
                </HeaderSearch>
                <HeaderMenu>
                    <HeaderMenudiv>
                        <HeaderMenuitems>
                            <li>
                                <button onClick={toResume}>
                                    <span>📝이력서등록</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={toPost}>
                                    <span>📢공고등록</span>
                                </button>
                            </li>
                        </HeaderMenuitems>
                    </HeaderMenudiv>
                </HeaderMenu>
            </Header>
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <Main>
                <MainBrand>

                </MainBrand>
                <MainFullTime>
                    <MainHeader>
                        <MainHeaderName>채용</MainHeaderName>
                    </MainHeader>
                    <MainFullTimeList>
                        {<FullTimeElement/>}
                    </MainFullTimeList>
                </MainFullTime>
                <MainPartTime>
                    <MainHeader>
                        <MainHeaderName>인턴</MainHeaderName>
                    </MainHeader>
                    <MainPartTimeList>
                        
                    </MainPartTimeList>
                </MainPartTime>
                <MainIntern>
                    <MainHeader>
                        <MainHeaderName>아르바이트</MainHeaderName>
                    </MainHeader>
                    <HomeInternList>
                        
                    </HomeInternList>
                </MainIntern>
            </Main>
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <Bottom> 
                <Bottomnav>
                    <BottomInfo>
                            <li><button><span>회사소개</span></button></li>
                            <li><button><span>인재채용</span></button></li>
                            <li><button><span>회원약관</span></button></li>
                            <li><button><span style={{fontWeight: "bold"}}>개인정보처리방침</span></button></li>
                            <li><button><span>이메일무단수집거부</span></button></li>
                            <li><button><span>채용정보 API</span></button></li>
                            <li><button><span>제휴문의</span></button></li>
                            <li><button><span>고객센터</span></button></li>
                    </BottomInfo>
                </Bottomnav>
                <BottomContact>
                    <button onClick={reload}>
                        <img src="img/injiklogomini.png" alt="하단로고"></img>
                    </button>
                    <ul>
                        <li style={{fontSize: 20}}>고객센터</li>
                        <li style={{fontSize: 30,fontWeight: "bold",color: "#2f3640"}}>2017-2023</li>
                        <li>전화 전 자주 묻는 질문을 확인하세요.</li>
                    </ul>
                    <ul>
                        <li>주소: 대전광역시 유성구 대학로99 충남대학교</li>
                        <li>대표이사: 홍성람</li>
                        <li>평일 09:00 ~ 18:00</li>
                    </ul>
                </BottomContact>
            </Bottom>
        </Entire>
    );
}

export default Home;