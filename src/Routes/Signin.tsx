import React from "react";
import styled from "styled-components";
import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import { Link } from "react-router-dom";
//import { useForm } from "react-hook-form";

const Main = styled.main`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
`;

const MainLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 30vh;
`;

const MainLoginManual = styled.div`
    height: 6vh;
    border-bottom: 1px solid #d2dae2;
`;

const MainLoginManualh1 = styled.h1`
    color: ${(props) => props.theme.impacttextcolor};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -2px;
`;

const MainLoginManualh3 = styled.h3`
    color: ${(props) => props.theme.normaltextcolor};
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: -1px;
`;
//━━━━━━━━━━━━━
const MainLoginHistory = styled.div`
    display: flex;
    align-items: center;
    height: 3vh;
`;

const MainLoginHistoryspan = styled.span`
    margin-right: 15px;
    font-size: 12px;
    color: ${(props) => props.theme.normaltextcolor};
`;
//━━━━━━━━━━━━━
const MainLoginInput = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr ;
    grid-template-rows: repeat(2,1fr) ;
    height: 6vh;
`;

const MainLoginInputid = styled.input`
    border: 1px thin #d2dae2;
    //background-color: ${(props) => props.theme.mainbgcolor};;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

const MainLoginInputpw = styled.input`
    //background-color: ${(props) => props.theme.mainbgcolor};
    border: 1px thin #d2dae2;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`;

const MainLoginInputbutton = styled.button`
    //background-color: ${(props) => props.theme.mainbgcolor};
    border: 1px thin #d2dae2;
    background-color: ${(props) => props.theme.bordercolor};
    color: ${(props) => props.theme.mainbgcolor};
    font-weight: 600;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    &:hover {
      cursor: pointer;
    }
`;

//━━━━━━━━━━━━━
const MainLoginAlter = styled.div`
    display: flex;
    align-items: center;
    height: 3vh;
    span {
        opacity: 0.5;
        margin-right: 10px;
    }
`;

const MainLoginAltersignup = styled(Link)`
    text-decoration-line: none;
    color: ${(props) => props.theme.impacttextcolor};
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px ;
`;

const MainLoginAlterfind = styled(Link)`
    color: ${(props) => props.theme.normaltextcolor};
    text-decoration-line: none;
    font-size: 13px;

`

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;    
}

function Signin() {
    // const { 
    // register, 
    // handleSubmit,
    // formState: {errors},
    // setError,
    // } = useForm<IForm>({
    //     defaultValues: {
    //         email: "@naver.com",
    //     },
    // });

    return(
        <>
        <SubHeader/>
        <Main>
            <MainLogin>
                <MainLoginManual>
                    <MainLoginManualh1>인직입니다. 환영합니다🕊️</MainLoginManualh1>
                    <MainLoginManualh3>걱정 없는 구인/구직 사이트입니다.</MainLoginManualh3>
                </MainLoginManual>
                <MainLoginHistory>
                    <input type="checkbox"/>
                    <MainLoginHistoryspan>로그인 유지</MainLoginHistoryspan>
                    <input type="checkbox"/>
                    <MainLoginHistoryspan>아이디 저장</MainLoginHistoryspan>
                </MainLoginHistory>
                <MainLoginInput>
                    <MainLoginInputid
                    placeholder="아이디"></MainLoginInputid>
                    <MainLoginInputpw
                    placeholder="비밀번호"></MainLoginInputpw>
                    <MainLoginInputbutton>로그인</MainLoginInputbutton>
                </MainLoginInput>
                <MainLoginAlter>
                    <MainLoginAltersignup
                    to="/Signup"
                    >회원가입</MainLoginAltersignup>
                    <span>|</span>
                    <MainLoginAlterfind
                    to="/"
                    >아이디/비밀번호 찾기</MainLoginAlterfind>
                </MainLoginAlter>
            </MainLogin>
        </Main>
        <MainFooter/>
        </>
    );
}

export default Signin;