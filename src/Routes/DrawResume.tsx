import MainFooter from "../Components/MainFooter";
import SubHeader from "../Components/SubHeader";
import styled from "styled-components";

const Entire = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.subbgcolor};
    width: 100%;
`;

const Mainbg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    width: 730px;
    height: 100%;
    border: 1px solid #eee;
    background-color: ${(props) => props.theme.mainbgcolor};
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
`;

const Main = styled.main`
    width: 85%;
    margin: 30px auto;
`;

const Header = styled.header`
    height: 35px;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
`;

const MainBasic = styled.section`
    margin-bottom: 20px;
`;

const MainBasicdiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 220px;

`;

const Img = styled.img`
    height: 160px;
    object-fit: scale-down;
`;

const MainBasicdivInfo = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 530px;
    height: 160px;

`

const MainBasicdivInfoelement = styled.li`
    height: 20%;
    display: flex;
    &:first-child {
        border-bottom: 1px solid ${(props) => props.theme.mainboxborder};
        margin-bottom: 15px;
        span {
            font-size: 22px;
        }
    }
    span {
        font-size: 15px;
        &:first-child {
            font-weight: bold;
            margin-right: 10px;
        }
    }
    
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainTitle = styled.section`
    margin-bottom: 20px;
`;

const MainTitlediv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60px;
`;

const MainTitleInput = styled.input`
    width: 100%;  
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    ::-webkit-input-placeholder {
      padding-left: 10px;
    }
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainEducation = styled.section`
    margin-bottom: 20px;
`;

const MainEducationdiv = styled.div`
    
`;

const AddInfo = styled.button`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.bordercolor};
    font-weight: bold;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 1px dashed ${(props) => props.theme.bordercolor};
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCareer = styled.section`
    margin-bottom: 20px;

`;

const MainCareerdiv = styled.div`
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCL = styled.section`
    margin-bottom: 20px;
`;

const MainCLdiv = styled.div`
`;
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainCertificate = styled.section`
`;

const MainCertificatediv = styled.div`
    margin-top: 10px;
`;

const MainClinput = styled.input`
    width: 99%;
    height: 400px;
`
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Maindiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;;
    height: 100px;
`;

const MainButton = styled.button`
    //background-color: ${(props) => props.theme.hovertextcolor};
    color: #f5f6fa;
    background-color: #45aaf2;
    border: 0;
    font-size: 18px;
    font-weight: bold; 
    width: 142px;
    height: 44px;
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
                            <Img
                            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRNogHnLEyvhdnh4N6c-kg3nTfQp0QQrhHw4OYvhp56fpjFAJdPwvfcIfu5pcLgBXVy">                                
                            </Img>
                            <nav>
                            <MainBasicdivInfo>
                                <MainBasicdivInfoelement>
                                    <span>배성민</span><span>생년 월일</span>
                                </MainBasicdivInfoelement>
                                <MainBasicdivInfoelement>
                                    <span>연락처:</span><span>XXX-XXXX-XXXX</span>
                                </MainBasicdivInfoelement>
                                <MainBasicdivInfoelement>
                                    <span>이메일:</span><span>1998.09.16</span>
                                </MainBasicdivInfoelement>
                                <MainBasicdivInfoelement>
                                    <span>주소:</span><span>대전광역시</span>
                                </MainBasicdivInfoelement>
                            </MainBasicdivInfo>
                            </nav>
                        </MainBasicdiv>
                    </MainBasic>
                    <MainTitle>
                        <Header>이력서 제목</Header>
                        <MainTitlediv>
                            <MainTitleInput
                            placeholder="(최대 25자)"/>
                        </MainTitlediv>
                    </MainTitle>
                    <MainEducation>
                        <Header>학력</Header>
                        <MainEducationdiv>
                            <AddInfo>+ 학력 추가</AddInfo>
                        </MainEducationdiv>
                    </MainEducation>
                    <MainCareer>
                        <Header>경력</Header>
                        <MainCareerdiv>
                            <AddInfo>+ 경력 추가</AddInfo>
                        </MainCareerdiv>
                    </MainCareer>
                    <MainCL>
                        <Header>자격증</Header>
                        <MainCLdiv>
                            <AddInfo>+ 자격증 추가</AddInfo>
                        </MainCLdiv>
                    </MainCL>
                    <MainCertificate>
                        <Header>자기소개서</Header>
                        <MainCertificatediv>
                            <MainClinput></MainClinput>
                        </MainCertificatediv>
                    </MainCertificate>
                    <Maindiv>
                        <MainButton>
                            이력서 저장
                        </MainButton>
                    </Maindiv>                
                </Main>
            </Mainbg>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default DrawResume;