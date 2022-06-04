import React from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import { ResumeList } from "../sample";

const Main = styled.main`
    height: 100%;
    width: 100%;
    display: grid;
    //grid-template-rows: 1fr 2fr 5fr 5fr 2fr;
`;

const Header = styled.header`
    margin-top: 20px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Resume = styled.span`
    padding: 5px 15px;
    font-size: 35px;
    font-weight: bold;
    border-bottom: 6px ridge ${(props) => props.theme.skyblue};
`;

const Info = styled.nav`
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const InfoItems = styled.ul`
    list-style-type : none;

    li {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
        letter-spacing: -2;
    }

    span { 
        font-size: 17px;
        font-weight: 700;
    }
`;

const CoverLetter = styled.section`
    margin-bottom: 10px;
    margin: 20px 0;
`;

const CLHeader = styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
`;

const CL = styled.pre`
`;

const Career = styled.nav`
`;

const CareerItems = styled.li`
    border: 1px solid ${(props) => props.theme.lightgray};
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.shadow};
    border-radius: 10px;
    margin: 10px 0;
`;

const CareerItem = styled.li`
    padding: 5px;
    font-size: 16px;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;
 
function ApplyInfo() {
    return(
        <Main>
            <Header>
                <Resume>Resume</Resume>
            </Header>
            <Info>
                <InfoItems>
                    <li><span>이름</span></li>
                    <li><span>전화번호</span></li>
                    <li><span>메일</span></li>
                    <li><span>주소</span></li>
                </InfoItems>
            </Info>
            <CoverLetter>
                <CLHeader>
                    <span>📌{" "}지원서 제목</span>
                </CLHeader>
                <CL>
                이력서
                입니다.
                </CL>
            </CoverLetter>
            <Career>
                <ul>
                    { ResumeList.map((element) => 
                        <CareerItems>
                            <ul
                            style={{padding: "20px"}}>
                                <CareerItem>{element.name}</CareerItem>
                                <CareerItem>{element.id}</CareerItem>
                                <CareerItem>{element.title}</CareerItem>
                            </ul>
                        </CareerItems>
                    )}
                </ul>
            </Career>
            <Footer>
                <SubmitButton text="계약"></SubmitButton>
            </Footer>
        </Main>
    );
}

export default ApplyInfo;