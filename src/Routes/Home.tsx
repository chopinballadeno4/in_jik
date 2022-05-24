import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FullTimeList, PartTimeList, InternList } from "../sample";
import styled from "styled-components";
import MainHeader from "../Components/MainHeader";
import MainFooter from "../Components/MainFooter";
import "../Scss/_bundle.scss";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Main 
const Main = styled.main`
    width: 70vw;
    height: 2500px;
    margin: 0 auto;
    margin-top: 3px;
    //background-color: ${(props) => props.theme.mainbgcolor};
    display: grid;
    grid-template-rows: 293px 12fr 6fr 13fr;
`;

const CataName = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const MainCareer = styled.div`
    margin: 20px;
  display: flex;
  justify-content: center ;
`;

const MainCompo = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 180px;
    margin: 20px;
    border: 1px solid #74b9ff;
    border-top: 3px solid #74b9ff;
    background-color: ${(props) => props.theme.mainbgcolor};
    text-decoration-line: none;
`;

const Info = styled.span`
    margin-top: 10px;
    margin-left: 15px;
    color: ${(props) => props.theme.normaltextcolor};
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
`;


function Home() {    

    return (
        <>
        <MainHeader/>
        <Main>
            <MainCareer>
                <img
                src="img/career.png" alt="직업">
                </img>
            </MainCareer>
            <MainFullTime>
                <CataName>
                    <MainHeaderName>채용</MainHeaderName>
                </CataName>
                <MainFullTimeList>
                    {FullTimeList.map(element => (
                        <li>
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
                        <li>
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
                        <li>
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