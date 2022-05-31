import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
    height: 187px;
    width: 100%;
    min-width: 1000px;
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
`;

const Search = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 134px;
`;

const Sign = styled.nav`
    width: 1000px;
    height: 30px;
`;

const SignUl = styled(UlParent)`
    width: 100%;
    background-color: antiquewhite;
    width: 1000px;
    list-style: none;
    display: flex;
    justify-content: flex-end;
`;

const SignLi = styled.li`
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
`;

const SearchSection = styled.div`
    width: 1000px;
    background-color: aqua;
    display: flex;
    height: 104px;
`;

const IconButton = styled.button`
    position: absolute;
    margin-left: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    &:hover {
        cursor: pointer;
    }
`;

const IconImg = styled.img`
    width: 170px;
    height: 104px; 
`;

const SearchBox = styled.div`
    display: flex;
    margin: 0 auto;
    width: 422px;
    height: 40px;
    border: 3px solid #00a8ff;
    align-self: center;
    input {
        width: 88%;
        border: 0;
        &:focus {
            outline: none;
        }
    }
`;

const SearchButton = styled.button`
    border: 0;
    width: 10%;
    background-color: transparent;
`;

const SearchIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`;

const Menu = styled.div`
    border-top: 1px solid ${(props) => props.theme.lightgray};
    border-bottom: 5px solid ${(props) => props.theme.skyblue};
`;

const MenuNav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: salmon;
    width: 1000px;
    height: 50px;
    margin: 0 auto;
`;

const MenuUl = styled(UlParent)`
    height: 50px;
    display: flex;
    align-items: center;
`;

const MenuLi = styled.li`
    margin: 10px 10px;
    button {
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.deepskyblue};
        }
        span {
            font-size: 17px;
            font-weight: bold;
        }
    }
    span {
        font-size: 17px;
        font-weight: bold;
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.deepskyblue};
        }
    }       
`;

function MainHeader() {
    const navigate = useNavigate();
    const [isLogined, setIsLogined] = useState(true);
    const { register, watch } = useForm();

    const reload = () => {

    }
    
    const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
    }
    
    const toResume = () => {
        if(isLogined) {
            navigate("/DrawResume");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/Signin");
        }
    }
    
    const toPost = () => {
        if(isLogined) {
            navigate("/DrawPost");
        } else {
            alert("로그인이 필요합니다.");
            navigate("/Signin");
        }
    }

    return (
        <Header>
            <Search>
                <Sign>
                    <SignUl>
                        <SignLi>
                            <Link
                            to="/Signin"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>로그인</span>
                            </Link>
                        </SignLi>
                        <SignLi>
                            <span style={{opacity: 0.2}}>│</span>
                        </SignLi>
                        <SignLi>
                            <Link
                            to="/Signup"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>회원가입</span>
                            </Link>
                        </SignLi>
                    </SignUl>
                </Sign>
                <SearchSection>
                        <IconButton onClick={reload}>
                            <IconImg src={require("../img/injiklogo.png")} alt="로고"></IconImg>
                        </IconButton>
                        <SearchBox>
                            <input type="text" placeholder="검색어" onChange={inputChange} autoFocus/>
                            <SearchButton>
                                <SearchIcon src={require("../img/searchicon.png")} alt="버튼이미지"/>
                            </SearchButton>
                        </SearchBox>
                </SearchSection>
            </Search>
            <Menu>
                <MenuNav>
                    <MenuUl>
                        <MenuLi>
                            <span>Ξ 전체메뉴</span>
                        </MenuLi>
                        <MenuLi>
                            <span>대기업채용</span>
                        </MenuLi>
                        <MenuLi>
                            <span>신입/경력</span>
                        </MenuLi>
                        <MenuLi>
                            <span>고객지원</span>
                        </MenuLi>
                        <MenuLi>
                            <span>인적성·면접</span>
                        </MenuLi>
                    </MenuUl>
                    <MenuUl>
                        <MenuLi>
                            <button onClick={toResume}>
                                <span>📝이력서등록</span>
                            </button>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={toPost}>
                                <span>📢공고등록</span>
                            </button>
                        </MenuLi>
                    </MenuUl>
                </MenuNav>
            </Menu>
        </Header>
    );

}

export default MainHeader;