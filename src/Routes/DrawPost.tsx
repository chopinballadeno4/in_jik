import React, { useState } from "react";
import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Entire = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.white1};
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
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
`;

const Main = styled.div`
    width: 85%;
    margin: 30px auto;
`;

const Header = styled.header`
    width: 100%;
    height: 35px;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: -2;
    border-bottom: 2px solid #333;
`;

const MainCata = styled.section`
    height: 100px;
`;

const MainCataList = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainCataButton = styled.button`
    font-size: 15px;
    font-weight: bold;
    color: #373f57;
    border: 1px solid ${(props) => props.theme.lightgray};
    width: 20%;
    height: 60%;
    background-color: white;
`

const MainCataButtonCli = styled(MainCataButton)`
    background-color: #45aaf2;
    border: 1px solid black;
`;

const MainTitle = styled.section`
`;

interface IMainInput  {
    propsheight : string;
} 

const MainInput = styled.input<IMainInput>`
    margin-top: 20px;
    height: ${(props) => props.propsheight};
    width: 99%;
    margin-bottom: 20px;
`;

const MainPeriod = styled.section`
`;

const MainPeriodmain = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MainPeriodDay = styled.button`
    font-size: 15px;
    font-weight: bold;
    border-radius: 30px;
    height: 50px;
    width: 8%;

`;

const PeriodHeader = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.navy};
    margin-bottom: 10px;
`;

const MainPeriodMain = styled.main`
    padding-top: 15px;
    width: 100%;
    display: flex;
    padding-bottom: 15px;
`;

const MainPeriodMainElement = styled.section`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    border-right: 1px solid #d2dae2;
`;

const FullImg = styled.img`
    margin: 20px auto;
    width: 20%;
    object-fit: scale-down;
`;

const FullImgdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const CustomDatePickerflex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CustomDatePicker = styled(DatePicker)`
    text-align: center;
    margin: 0 auto;
    font-size: 15px;
    font-weight: bold;
    height: 30px;
    border: 0;
    border-bottom: 3px solid ${(props) => props.theme.skyblue};
`;

const MainStory = styled.section`
`;

const Maindiv = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const MainButton = styled.button`
    color: #f5f6fa;
    background-color: #45aaf2;
    border: 0;
    font-size: 18px;
    font-weight: bold; 
    width: 142px;
    height: 44px;
`;

function DrawPost() {
    const [isFull, setIsFull] = useState<boolean>(true);
    const [isPart, setIsPart] = useState<boolean>(false);
    const [isIntern, setIntern] = useState<boolean>(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const allFalse = () => {
        setIsFull(false);
        setIsPart(false);
        setIntern(false);
    }

    const ButtonClick = (event : React.MouseEvent<HTMLButtonElement>, select: number) => {
        if(select===0) {
            allFalse();
            setIsFull(!isFull);
        } else if(select===1) {
            allFalse();
            setIsPart(!isPart);
        } else {
            allFalse();
            setIntern(!isIntern);
        }
    }

    return (
        <>
        <SubHeader/>
        <Entire>
            <Mainbg>
            <Main>
                <MainCata>
                    <Header>?????? ??????</Header>
                    <MainCataList>
                        { isFull ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,0)}>??????</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,0)}>??????</MainCataButton>
                        }
                        { isPart ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,1)}>???????????????</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,1)}>???????????????</MainCataButton>
                        }
                        { isIntern ?
                        <MainCataButtonCli
                        onClick={e => ButtonClick(e,2)}>??????</MainCataButtonCli>
                        :
                        <MainCataButton
                        onClick={e => ButtonClick(e,2)}>??????</MainCataButton>
                        }
                    </MainCataList>
                </MainCata>
                <MainTitle>
                    <Header>??????</Header>
                    <MainInput
                    propsheight="35px"
                    placeholder="?????? 25???"></MainInput>
                </MainTitle>
                <MainPeriod>
                    <Header>??????</Header>
                        { isFull ?
                        <FullImgdiv>
                            <FullImg
                            src={require("../img/officalImg2.png")}
                            ></FullImg>
                        </FullImgdiv>
                        :
                            <></>
                        }
                        { isPart ?
                            <MainPeriodmain>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                                <MainPeriodDay>???</MainPeriodDay>
                            </MainPeriodmain>
                        :
                            <></>
                        }
                        { isIntern ?
                        <MainPeriodMain>
                            <MainPeriodMainElement>
                                <PeriodHeader>
                                    ???? ?????????
                                </PeriodHeader>
                                <CustomDatePickerflex>
                                    <CustomDatePicker
                                    selected={startDate}
                                    onChange={(date: Date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    />
                                </CustomDatePickerflex>
                            </MainPeriodMainElement>
                            <MainPeriodMainElement>
                                <PeriodHeader>
                                    ???? ?????????
                                </PeriodHeader>
                                <CustomDatePickerflex>
                                    <CustomDatePicker
                                    selected={endDate}
                                    onChange={(date: Date) => setEndDate(date)}
                                    selectsEnd
                                    endDate={endDate}
                                    minDate={startDate}
                                    />
                                </CustomDatePickerflex>
                            </MainPeriodMainElement>
                        </MainPeriodMain>
                        :
                            <></>
                        }
                </MainPeriod>
                <MainStory>
                    <Header>??????</Header>
                    <MainInput
                    propsheight="300px"
                    placeholder="?????? 2000???"
                    ></MainInput>
                </MainStory>
                <Maindiv>
                        <MainButton>???????????? ??????</MainButton>
                </Maindiv>
            </Main>
            </Mainbg>
        </Entire>
        <MainFooter/>
        </>
    );
}

export default DrawPost;