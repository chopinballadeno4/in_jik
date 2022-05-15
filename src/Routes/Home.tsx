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
        width: 1260px;
        height: 134px;
        position: relative;
        background-color: pink;
    `;

    const HeaderSearchUser = styled.div`
        background-color: skyblue;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        width: 1260px;
        height: 30px;

    `;

    const HeaderSearchUserSign = styled.ul`
        list-style: none;
        margin: 0;

        li {
            margin: 0 5px;
            float: left;
            button {
                background-color: transparent;
                padding: 0;
                border: 0;
                /* outline: 0; */
                &:hover {
                    opacity: 0.5;
                }
            }
        }
    `;

    const HeaderSearchinput = styled.div`
        height: 104px;
     
        button {
            background-color: transparent;
            border: 0;
            &:hover {
                cursor: pointer;
            }
            img {
                width: 170px;
                height: 104px;
            }
        }
    `;

    const HeaderSearchinputBox = styled.form`
        

    `;

    const HeaderMenu = styled.div`
        border-top: thin solid #e5e5e5;
        border-bottom: 3px solid #ffd203;
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