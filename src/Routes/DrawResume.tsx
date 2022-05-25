import React from "react";
import MainFooter from "../Components/MainFooter";
import SubHeader from "../Components/SubHeader";
import styled from "styled-components";

const Entire = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.subbgcolor};
    width: 100vw;
    height: 100vh;
`;

const Mainbg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 95%;
    margin: 10px 10px;
    border: 1px solid #eee;
    background-color: ${(props) => props.theme.mainbgcolor};
`;

const Main = styled.main`
    width: 90%;
    height: 95%;
`;

const Header = styled.header`
    padding: 10px 0;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
`;

const MainBasic = styled.section`
    background-color: #eccc68;
`;

const MainBasicdiv = styled.div`
    height: 100px;
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainTitle = styled.section`
    background-color: #786fa6;

`;

const MainTitlediv = styled.div`
    height: 100px;
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainEducation = styled.section`
    background-color: #f8a5c2;

`;

const MainEducationdiv = styled.div`
    height: 100px;
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCareer = styled.section`
    background-color: #f3a683;

`;

const MainCareerdiv = styled.div`
    height: 100px; 
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCL = styled.section`
    background-color: #7ed6df;

`;

const MainCLdiv = styled.div`
    height: 100px;
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCertificate = styled.section`
    background-color: #badc58;

`;

const MainCertificatediv = styled.div`
    height: 100px;
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainButton = styled.div`
    background-color: #ff7979;
    height: 100px;
`;


function DrawResume() {
    return (
        <>
        <SubHeader/>
        <Entire>
            <Mainbg>
                <Main>
                    <MainBasic>
                        <Header>기본정보</Header>
                        <MainBasicdiv>

                        </MainBasicdiv>
                    </MainBasic>
                    <MainTitle>
                        <Header>이력서 제목</Header>
                        <MainTitlediv>

                        </MainTitlediv>
                    </MainTitle>
                    <MainEducation>
                        <Header>학력</Header>
                        <MainEducationdiv>

                        </MainEducationdiv>
                    </MainEducation>
                    <MainCareer>
                        <Header>경력</Header>
                        <MainCareerdiv>

                        </MainCareerdiv>
                    </MainCareer>
                    <MainCL>
                        <Header>자기소개서</Header>
                        <MainCLdiv>

                        </MainCLdiv>
                    </MainCL>
                    <MainCertificate>
                        <Header>자격증</Header>
                        <MainCertificatediv>

                        </MainCertificatediv>
                    </MainCertificate>
                    <MainButton>
                        
                    </MainButton>                
                </Main>
            </Mainbg>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default DrawResume;