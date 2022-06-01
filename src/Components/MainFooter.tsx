import React from "react";
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

const Footer = styled.footer`
    height: 250px;
    min-width: 1200px;
    width: 100%;
    background-color: ${(props) => props.theme.white};
`;

const Info = styled.div`
    height: 50px;
    border-top: 3px solid ${(props) => props.theme.skyblue};
    border-Bottom: thin solid ${(props) => props.theme.lightgray};
`;

const InfoUl = styled(UlParent)`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoLi = styled.li`
    margin: 0 30px;
    float: left;
    span {
        font-size: 15px;
        color : #444;
        &:hover {
            opacity: 0.5;
        }
    }
`;

const Contact = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    margin-top: 20px;

    ul {
        margin: 0 10px;
        list-style: none;
        li {
            margin: 5px;
            color : #7f8c8d;
        }
    }
`;

const Icon = styled.img`
    height: 50px;
    margin-top: 15px;
    object-fit: scale-down;
`;

function MainFooter() {
    return (
        <Footer> 
            <Info>
                <InfoUl>
                        <InfoLi><span>회사소개</span></InfoLi>
                        <InfoLi><span>인재채용</span></InfoLi>
                        <InfoLi><span>회원약관</span></InfoLi>
                        <InfoLi><span style={{fontWeight: "bold"}}>개인정보처리방침</span></InfoLi>
                        <InfoLi><span>이메일무단수집거부</span></InfoLi>
                        <InfoLi><span>채용정보 API</span></InfoLi>
                        <InfoLi><span>제휴문의</span></InfoLi>
                        <InfoLi><span>고객센터</span></InfoLi>
                </InfoUl>
            </Info>
            <Contact>
                <Icon src={require("../img/injiklogomini.png")} alt="하단로고"></Icon>
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
            </Contact>
        </Footer>
    );

}

export default MainFooter