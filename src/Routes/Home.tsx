import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FullTimeList, PartTimeList, InternList } from "../sample";
import styled from "styled-components";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Main 
const Main = styled.main`
    width: 70%;
    /* height: 3300px; */
    min-width: 1300px;
    margin: 0 auto;
    margin-top: 3px;
    display: grid;
`;

const CataName = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.lightgray};
    height: 50px;
`;

const Img = styled.img`
    width: 250px;
    height: 60px;
    margin-top: 10px;
    object-fit: scale-down ;
`;

const MainHeaderName = styled.span`
    margin-left: 50px;
    font-size: 20px;
    font-weight: 700;
`;

const SubMain = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(${(props) => props.theme.skyblue} 50%, ${(props) => props.theme.white} 50%);
`;

const SubMainImg = styled.img`
    position: relative;
    top: -100px;
    height: 450px;
    object-fit: scale-down;
`;

const SubMainMent = styled.img`
    width: 500px;
    position: relative;
    top: -220px;
`;

const MainCompo = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 180px;
    margin: 20px;
    border: 1px solid #74b9ff;
    border-top: 3px solid #74b9ff;
    background-color: ${(props) => props.theme.white};
    text-decoration-line: none;
`;

const Info = styled.span`
    margin-top: 10px;
    margin-left: 15px;
    color: ${(props) => props.theme.navy};
    font-size: 14px;
`;

const Brand = styled(Info)`
    font-size: 18px;
    margin-top: 30px;
    font-weight: 700;
`;

//━━━━━━━━━
const MainFullTime = styled.section`
    

`;

const MainFullTimeList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
//━━━━━━━━━
const MainPartTime = styled.section`
`;

const MainPartTimeList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
//━━━━━━━━━
const MainIntern = styled.section`
`;

const HomeInternList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 200px;
`;


function Home() {
    const [isLogined, setIsLogined] = useState(true);

    return (
        <>
        <MainHeader/>
        <SubMain>
            <SubMainImg
            src={require("../img/career2.png")} alt="직업">
            </SubMainImg>
            <SubMainMent
            src={require("../img/mention.png")} alt="멘트"
            >
            </SubMainMent>
        </SubMain>
        <Main>
            <MainFullTime>
                <CataName>
                    <MainHeaderName>채용</MainHeaderName>
                </CataName>
                <MainFullTimeList>
                    {FullTimeList.map(element => (
                        <li key={element.no}>
                            <Link
                            to={{pathname: `/${element.cata}/${element.no}`}}
                            state={{name: element.name, cata: element.cata, no: element.no}}
                            style={{textDecorationLine: "none"}}
                            >
                                <MainCompo>
                                    <Img
                                    src={`https://logo.clearbit.com/${element.name}.com`}
                                    />
                                    <Brand>{element.name}</Brand>
                                    <Info>{element.info}</Info>
                                </MainCompo>
                            </Link>
                        </li>
                    ))}
                </MainFullTimeList>
            </MainFullTime>
            <MainPartTime>
                <CataName>
                    <MainHeaderName>아르바이트</MainHeaderName>
                </CataName>
                <MainPartTimeList>
                    {PartTimeList.map(element => (
                        <li key={element.no}>
                            <Link
                            to={{pathname: `/${element.cata}/${element.no}`}}
                            state={{name: element.name, no: element.no, }}
                            style={{textDecorationLine: "none"}}
                            >
                                <MainCompo>
                                    <Brand>{element.name}</Brand>
                                    <Info>{`근무요일: ${element.day}`}</Info>
                                    <Info>{`시급: ${element.pay}`}</Info>
                                </MainCompo>
                            </Link>
                        </li>
                    ))}
                </MainPartTimeList>
            </MainPartTime>
            <MainIntern>
                <CataName>
                    <MainHeaderName>인턴</MainHeaderName>
                </CataName>
                <HomeInternList>
                    {InternList.map(element => (
                        <li key={element.no}>
                            <Link
                            to={{pathname: `/${element.cata}/${element.no}`}}
                            state={{name: element.name, cata: element.cata, no: element.no}}
                            style={{textDecorationLine: "none"}}
                            >
                                <MainCompo>
                                    <Img
                                    src={`https://logo.clearbit.com/${element.name}.com`}
                                    />
                                    <Brand>{element.name}</Brand>
                                    <Info>{`근무기간: ${element.period}`}</Info>
                                </MainCompo>
                            </Link>
                        </li>
                    ))}
                </HomeInternList>
            </MainIntern>
        </Main>
        <MainFooter/>
        </>
    );
}

export default Home;