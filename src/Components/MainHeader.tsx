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
    min-width: 900px;
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
    width: 900px;
    height: 30px;
`;

const SignUl = styled(UlParent)`
    width: 100%;
    width: 900px;
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
    width: 900px;
    display: flex;
    height: 104px;
`;

const IconButton = styled.button`
    position: relative;
    bottom: 10px;
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
    position: relative;
    right: 60px;
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
    width: 900px;
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
        color: ${(props) => props.theme.deepgray};
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.deepskyblue};
        }
    }       
`;

function MainHeader() {
    const navigate = useNavigate();
    const [isLogined, setIsLogined] = useState(false);
    const { register, watch } = useForm();
    const [start, setStart] = useState([0,0,0,0,0,0]);
    const [end, setEnd] = useState([0,0,0,0,0,0]);
    const [isStart, setIsStart] = useState(false);
    const [isEnd, setIsEnd] = useState(false)

    const WorkStart = () => {
        let today = new Date();
        let year = today.getFullYear(); // ??????
        let month = today.getMonth() + 1;  // ???
        let day = today.getDay();  // ??????
        let hours = today.getHours(); // ???
        let minutes = today.getMinutes();  // ???
        let seconds = today.getSeconds();  // ???
        setStart([year,month,day,hours,minutes,seconds]);
        setIsStart((prev) => !prev);
      }
    
      const WorkEnd = () => {
        let today = new Date();
        let year = today.getFullYear(); // ??????
        let month = today.getMonth() + 1;  // ???
        let day = today.getDay();  // ??????
        let hours = today.getHours(); // ???
        let minutes = today.getMinutes();  // ???
        let seconds = today.getSeconds();  // ???
        setEnd([year,month,day,hours,minutes,seconds]);
        setIsEnd((prev) => !prev);
      }

    const reload = () => {
        navigate("/");
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
            alert("???????????? ???????????????.");
            navigate("/Signin");
        }
    }
    
    const toPost = () => {
        if(isLogined) {
            navigate("/DrawPost");
        } else {
            alert("???????????? ???????????????.");
            navigate("/Signin");
        }
    }

    return (
        <Header>
            <Search>
                <Sign>
                    <SignUl>
                        { isLogined ?
                        <SignLi>
                            <Link
                            to="/"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>????????????</span>
                            </Link>
                        </SignLi>      
                        : 
                        <SignLi>
                            <Link
                            to="/Signin"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>?????????</span>
                            </Link>
                        </SignLi>
                        }
                        <SignLi>
                            <span style={{opacity: 0.2}}>???</span>
                        </SignLi>
                        { isLogined ?
                        <SignLi>
                            <Link
                            to="/MyPage"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>???????????????</span>
                            </Link>
                        </SignLi>
                        :
                        <SignLi>
                            <Link
                            to="/Signup"
                            style={{ textDecoration: 'none'}}
                            >
                                <span>????????????</span>
                            </Link>
                        </SignLi>
                        }
                    </SignUl>
                </Sign>
                <SearchSection>
                        <IconButton onClick={reload}>
                            <IconImg src={require("../img/injiklogo.png")} alt="??????"></IconImg>
                        </IconButton>
                        <SearchBox>
                            <input type="text" placeholder="&nbsp;&nbsp;?????????" onChange={inputChange} autoFocus
                            style={{marginLeft: "10px"}}/>
                            <SearchButton>
                                <SearchIcon src={require("../img/searchicon.png")} alt="???????????????"/>
                            </SearchButton>
                        </SearchBox>
                </SearchSection>
            </Search>
            <Menu>
                <MenuNav>
                    <MenuUl>
                        <MenuLi>
                            <span>?? ????????????</span>
                        </MenuLi>
                        <MenuLi>
                            <span>???????????????</span>
                        </MenuLi>
                        <MenuLi>
                            <span>??????/??????</span>
                        </MenuLi>
                        <MenuLi>
                            <span>????????????</span>
                        </MenuLi>
                        <MenuLi>
                            <span>?????????????????</span>
                        </MenuLi>
                    </MenuUl>
                    <MenuUl>
                        <MenuLi>
                            <button onClick={toResume}>
                                <span>???????????????????</span>
                            </button>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={toPost}>
                                <span>????????????????</span>
                            </button>
                        </MenuLi>
                        { isLogined ?  
                        <>
                        <MenuLi>
                            <button onClick={WorkStart}>
                                <span
                                style={{color: "#bdc3c7"}}>??????</span>
                                {isStart ? 
                                <span 
                                style={{color: "black"}}>???</span> : <></> 
                                }
                            </button>
                        </MenuLi>
                        <MenuLi>
                            <button onClick={WorkEnd}>
                                <span
                                style={{color: "#bdc3c7"}}>??????</span>
                                {isEnd ?
                                <span 
                                style={{color: "black"}}>??????</span> : <></> 
                                }
                            </button>
                        </MenuLi>
                        </>
                        : <></>}
                    </MenuUl>
                </MenuNav>
            </Menu>
        </Header>
    );

}

export default MainHeader;