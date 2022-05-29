import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Map from "../Components/Map";

const Entire = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 1000px;
    background-color: ${(props) => props.theme.subbgcolor};
`;

const Main = styled.div`
    width: 40%;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.mainbgcolor};
    margin: 50px auto;
`;

const MainBack = styled.section`
    height: 50px;
`;

const MainBackButton = styled.button`
    background-color: transparent ;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;

const MainHeader = styled.header`
    display: flex;
    justify-content: center;
    height: 50px;
`;

const MainHeaderName = styled.span`
    padding: 0 15px;
    font-size: 35px;
    font-weight: bold;
    border-bottom: 6px ridge ${(props) => props.theme.bordercolor};
`;

const MainCondition = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
`;

const MainConditionUl = styled.ul`
    margin-left: 20px;
`;

const MainConditionLi = styled.li`
    font-size: 17px;
    font-weight: 600;
    margin: 10px 5px;
    color: #666666;
`;

const MainStoryArea = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 800px;
`;

const MainStoryStory = styled.article`
    width: 95%;
    height: 95%;
    border: 1px solid ${(props) => props.theme.grayborder};
`;

const MainWorkingArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    
`;

const MainEmplorerInfo = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainEmplorerInfoUl = styled.ul`
    margin-left: 20px;
`;


const MainBottom = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

`;

const MainEmplorerInfoLi = styled(MainConditionLi)`
    font-size:16px;
`;

const MainBottomButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: #45aaf2;
    border: 0;
    font-size: 18px;
    color: #f5f6fa;
    font-weight: bold;z
`;

function PostInfo() {
    const navigate = useNavigate();

    const returnClick = () => {
        navigate("/");
    }

    return (
        <Entire>
            <Main>
                <MainBack>
                    <MainBackButton
                    onClick={returnClick}>❌</MainBackButton>
                </MainBack>
                <MainHeader>
                    <MainHeaderName>
                        회사이름
                    </MainHeaderName>
                </MainHeader>
                <MainCondition>
                    <MainConditionUl>
                        <MainConditionLi>
                            근무형태: 아르바이트
                        </MainConditionLi>
                        <MainConditionLi>
                            근무기간: 3년
                        </MainConditionLi>
                        <MainConditionLi>
                            근무요일,시간: 평일
                        </MainConditionLi>
                        <MainConditionLi>
                            급여: 최저시급
                        </MainConditionLi>
                    </MainConditionUl>
                </MainCondition>
                <MainStoryArea>
                    <MainStoryStory>

                    </MainStoryStory>
                </MainStoryArea>
                <MainWorkingArea>
                    <Map/>
                </MainWorkingArea>
                <MainEmplorerInfo>
                    <MainEmplorerInfoUl>
                        <MainEmplorerInfoLi>
                            채용담당자: 홍길동
                        </MainEmplorerInfoLi>
                        <MainEmplorerInfoLi>
                            H.P: 010-3387-9513
                        </MainEmplorerInfoLi>
                        <MainEmplorerInfoLi>
                            Email: qo98333@naver.com
                        </MainEmplorerInfoLi>
                    </MainEmplorerInfoUl>
                </MainEmplorerInfo>
                <MainBottom>
                    <MainBottomButton>
                        지원
                    </MainBottomButton>
                </MainBottom>
            </Main>
        </Entire>
    );
}

export default PostInfo;