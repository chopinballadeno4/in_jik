import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 70px;
    border-bottom: 2px solid ${(props) => props.theme.bordercolor};
`;

const Button = styled.button`
    background-color: transparent;
    border: 0;
    margin-top: 5px;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    margin: 0 auto;
    width: 50px;
    height: 50px;
`;

const MenuList = styled.nav`
    display: flex;
    align-items: center;
    list-style: none;
`

const Menu = styled.li`
    margin: 0 100px;
    font-size: 17px;
    font-weight: 600;
    float: left;
    color: ${(props) => props.theme.normaltextcolor};
    margin: 0 10px;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.hovertextcolor}
    }
`;

const Input = styled.input`
    margin-top: 12px;
    margin-left: 50px;
    height: 40px;
    width: 250px;
    border: 2px solid #0984e3; 
    border-radius: 15px;
    ::placeholder {
        color: #0984e3;
        font-weight: 600;
        text-indent: 40px;
    }
`;


function SubHeader() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    }

    return (
        <Header>
            <Button onClick={onClick}>
                <Img src={require("../img/smallpigeon.png")}/>
            </Button>
            <MenuList>
                <span style={{opacity: "0.2", margin: "0 10px"}}>|</span>
                <ul>
                    <Menu>Ξ 전체메뉴</Menu>
                    <Menu>대기업채용</Menu>
                    <Menu>신입/경력</Menu>
                    <Menu>고객지원</Menu>
                    <Menu>인적성·면접</Menu>
                </ul>
            </MenuList>
            <Input placeholder="지역, 직무, 회사 키워드  🔍"/>
        </Header>

    );
}

export default SubHeader;