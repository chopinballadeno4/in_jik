// import SubHeader from "../Components/SubHeader";
// import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    min-width: 450px;
    height: 100%;
    margin: 0 auto;
`;

const Img = styled.img`
    margin-top: 50px;
    margin-bottom: 80px;
    object-fit: scale-down;
    height: 300px;
`;

const Header = styled.span`
    font-size: 18px;    
    letter-spacing: -2px;
    font-weight: bold;
    color: ${(props) => props.theme.deepgray};
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainEmail = styled.div`
    margin-top: 20px;
    width: 400px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 100px;  
`;

const MailHeader = styled(Header)`
    margin-bottom: 10px;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid #a4b0be;
    background-color: ${(props) => props.theme.white};
    font-size: 15px;
    font-weight: bold;
    grid-row: 2 / 4;
    span {
        margin-left: 10px;
    }
    &:hover {
        cursor: pointer;
    }
`;

const ButtonImg = styled.img`
    object-fit: scale-down;
    height: 40px;
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainPW = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 150px;  
`;

const PWHeader = styled(Header)`
    margin-bottom: 10px;
    grid-row: 1 / 2;
`;

const MainPWInput = styled.input`

`; 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const MainFin = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainFinButton = styled.button`
    margin: 0 auto;
    width: 220px;
    height: 60px;
    background-color: #2d98da;
    font-size: 20px;
    color: #fff;
    letter-spacing: -1px;
    font-weight: bold;
    box-shadow: 0 9px 25px rgb(0 0 0 / 40%);
    &:hover {
        cursor: pointer;
    }
`;

const Info = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    height: 300px; 
`;

const InfoItem = styled.input`
    
`;


function Signup () {
    const [ isEmployer, setIsEmployer ] = useState(false);
    const [ isEmployee, setIsEmployee ] = useState(false);
    const { register, handleSubmit, formState } = useForm(); 

    const EmployeeClick = () => {
        setIsEmployee((prev) => !prev);
        if(isEmployer) {
            setIsEmployer((prev) => !prev);
        }   
    }

    const EmployerClick = () => {
        setIsEmployer((prev) => !prev);
        if(isEmployee) {
            setIsEmployee((prev) => !prev);
        }   
    }

    const onValid = (data: any) => {
        console.log(data);
        console.log(handleSubmit);
    };

    return(
        <>
            <Main>
                <Img
                src={require("../img/injiklogo2.png")}
                >
                </Img>
                <MainEmail>
                    <MailHeader>가입구분</MailHeader>
                    {isEmployee ? 
                    <Button
                    style={{backgroundColor: "#3498db"
                    ,color: "white"}}
                    onClick={EmployeeClick}>
                        <span>구직자 (Employee)</span>
                    </Button>
                    :
                    <Button
                    onClick={EmployeeClick}>
                        <span>구직자 (Employee)</span>
                    </Button>
                    }
                    {isEmployer ? 
                    <Button
                    style={{backgroundColor: "#3498db"
                    ,color: "white"}}
                    onClick={EmployerClick}>
                        <span>구인자 (Employer)</span>
                    </Button>
                    :
                    <Button
                    onClick={EmployerClick}>
                        <span>구인자 (Employer)</span>
                    </Button>
                    }
                </MainEmail>
                <form onSubmit={handleSubmit(onValid)}>
                <Info>
                    <PWHeader>정보입력</PWHeader>
                    <InfoItem
                    {...register("name", {required: true})}
                    placeholder="  이름">
                    </InfoItem>
                    <InfoItem
                    {...register("birth", {required: true})}
                    placeholder="  생년월일">
                    </InfoItem>
                    <InfoItem
                    {...register("address", {required: true})}
                    placeholder="  주소">
                    </InfoItem>
                    <InfoItem
                    {...register("number", {required: true})}
                    placeholder="  전화번호">
                    </InfoItem>
                    <InfoItem
                    {...register("email", {required: true})}
                    placeholder="  이메일">
                    </InfoItem>
                </Info>
                <MainPW>
                    <PWHeader>비밀번호&nbsp;/&nbsp;확인</PWHeader>
                    <MainPWInput
                    {...register("pw", {required: true})}
                    type="password"
                    placeholder="* 비밀번호">
                    </MainPWInput>
                    <MainPWInput
                    {...register("pwcheck", {required: true})}
                    type="password"
                    placeholder="* 비밀번호 확인">
                    </MainPWInput>
                </MainPW>
                <MainFin>
                    <MainFinButton>회원가입 완료</MainFinButton>
                </MainFin>
                </form>
            </Main>
        </>
    );

}

export default Signup;