import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Header = styled.header`
    width: 100vw;
    height: 187px;
    //background-color: #ffffff;
    background-color: ${(props) => props.theme.mainbgcolor};
    display: flex;
    flex-direction: column;
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
        margin: 10px 5px;
        float: left;
        outline: 0;
        &:hover {
            opacity: 0.5;
        }

        span {
            color : #222;
            font-size: 14px;
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
    border-bottom: 5px solid ${(props) => props.theme.bordercolor};
    
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
                color: ${(props) => props.theme.hovertextcolor};
            }
            span {
                font-size: 17px;
                font-weight: 600;
            }
        }
        span {
                font-size: 17px;
                font-weight: 600;
                &:hover {
                    cursor: pointer;
                    color: ${(props) => props.theme.hovertextcolor};
                }
        }       
    }
`;

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

function MainHeader() {

    return (
        <Header>
            <HeaderSearch>
                <HeaderSearchUser>
                    <HeaderSearchUserSign>
                        <li>
                            <Link
                            to="/Signin"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <span style={{opacity: 0.2}}>│</span>
                        </li>
                        <li>
                            <Link
                            to="/Signup"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>회원가입</span>
                            </Link>
                        </li>
                    </HeaderSearchUserSign>
                </HeaderSearchUser>
                <HeaderSearchinput>
                        <button onClick={reload}>
                            <img src={require("../img/injiklogo.png")} alt="로고"></img>
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
                            <span>Ξ 전체메뉴</span>
                        </li>
                        <li>
                            <span>대기업채용</span>
                        </li>
                        <li>
                            <span>신입/경력</span>
                        </li>
                        <li>
                            <span>고객지원</span>
                        </li>
                        <li>
                            <span
                            style={{marginRight: "140px"}}>인적성·면접</span>
                        </li>
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
    );

}

export default MainHeader;