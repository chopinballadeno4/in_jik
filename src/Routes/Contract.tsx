import React from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitButton from "../Components/SubmitButton";

const Entire = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.white1};
`;

const Main = styled.div`
    min-width: 700px;
    max-width: 750px;
    height: 800px;
    width: 30%;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    margin: 30px auto;
`;

const ImgSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: pink;
`;

const Img = styled.img`
    object-fit: scale-down;
    height: 100px;
`;

const Back = styled.section`
    height: 50px;
`;

const BackButton = styled.button`
    background-color: transparent ;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;

const PersonInfo = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    margin-bottom: 150px;
`;

const Info = styled.div`
    width: 100%;
    height: 90%;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 17px;
        font-weight: bold;
        line-height: 22px;
    }
`;

const Split = styled.div`
    width: 1px;
    height: 100%;
    border: 1px solid ${(props) => props.theme.lightgray};  
`;

const PersonImg = styled.img`
    height: 120px;
    object-fit: scale-down;
    margin: 20px 0;
`;

const ContractInfo = styled.section`
    margin-top: 10px;
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
`;

const Input = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

  span {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
  }

  input {
      width: 70px;
      height: 18px;
      font-weight: bold;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid ${(props) => props.theme.gray};
  }
`;

const Submit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;  
`;

function Contract() {
    const params = useParams();
    const navigate = useNavigate();

    const returnClick = () => {
        navigate(-1);
    }
     
    return (
        <Entire>
            <Main>
                <Back>
                    <BackButton
                    onClick={returnClick}>❌</BackButton>
                </Back>
                <PersonInfo> 
                    <Info>
                        <PersonImg src={require("../img/person1.png")}/>
                        <span>이름</span>
                        <span>전화번호</span>
                        <span>이메일</span>
                    </Info>
                    <Split/>
                    <Info>
                        <PersonImg src={require("../img/person2.png")}/>
                        <span>이름</span>
                        <span>전화번호</span>
                        <span>이메일</span>
                    </Info>
                </PersonInfo>
                <ContractInfo>
                    <Input>
                        <span>💵{" "} 급여</span>
                        <input></input>
                    </Input>
                    <Input>
                        <span>⏰{" "} 주당 근무시간</span>
                        <input></input>
                    </Input>
                </ContractInfo>
                <Submit>
                    <SubmitButton text="계약하기"/>
                </Submit>
                {/* <ImgSection>  
                    <Img src={require("../img/contract.jpeg")}/>
                </ImgSection> */}
            </Main>
        </Entire>
    );
}

export default Contract;