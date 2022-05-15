import React from "react";
import styled from "styled-components";

function Home() {
    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Header
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
        margin: 0 auto;
        width: 45vw;
        height: 134px;
        position: relative;
    `;

    const HeaderSearchUser = styled.div`
        display: flex;
        justify-content: flex-end;
        list-style: none;
        width: 45vw;
        height: 30px;

    `;

    const HeaderSearchUserSign = styled.ul`
        list-style: none;
        margin: 0;

        li {
            margin: 5px 5px;
            float: left;
            button {
                background-color: transparent;
                padding: 0;
                border: 0;
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
        //justify-content: space-between;
        height: 104px;
        button {    
            margin-left: 0;
            padding: 0;
            background-color: transparent;
            border: 0;
            &:hover {
                cursor: pointer;
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
        margin: 0 auto ;

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
        width: 100vw;
        height: 50px;
    `;

    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Main
   
   const Main = styled.main`
        background-color: #f7f7f7;
        grid-row: 1 2;
    `;

    //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Buttom
    const Bottom = styled.article`
        background-color: orange;
        grid-row: 2 3;
    `;

    const toSignIn = () => {

    }

    const toSignUp = () => {

    }

    const reload = () => {

    }

    const inputChange = () => {

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
                                <span>│</span>
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