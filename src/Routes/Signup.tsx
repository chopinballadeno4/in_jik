// import SubHeader from "../Components/SubHeader";
// import MainFooter from "../Components/MainFooter";
import styled from "styled-components";
import React, { useState } from "react";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
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
    color: ${(props) => props.theme.impacttextcolor};
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

const MainEmailButton = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid #a4b0be;
    background-color: ${(props) => props.theme.mainbgcolor};
    font-size: 15px;
    font-weight: bold;
    grid-row: 2 / 4;
    span {
        margin-left: 10px;
    }
`;

const MainEmailButtonImg = styled.img`
    object-fit: scale-down;
    height: 40px;
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainPW = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    height: 130px;  
`;

const PWHeader = styled(Header)`
    margin-bottom: 10px;
    grid-row: 1 / 2;
`;

const MainPWInput = styled.input`

`; 

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MainAgree = styled.div`
    margin-top: 30px;
    width: 400px;
    display: grid;
    grid-template-rows: 1fr 5fr;
    height: 300px;
`;

const AgreeHeader = styled(Header)`
    margin-bottom: 10px;
    margin-top: 15px;
    grid-row: 1 / 2;
`;

const MainAgreeList = styled.ul`
    background-color: #f4f5f7;
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-row: 2 / 3;
    border: 1px solid #a4b0be;
`;

const MainAgreeListli = styled.li`
    margin-left: 10px;
    display: flex;
    align-items: center;
    span {
        font-size: 15px;
        font-weight: bold;
        color: ${(props) => props.theme.normaltextcolor};
        
    }
    span:first-child {
        color: black;
    }
`;

const MainAgreeListliButton = styled.button`
    position: absolute;
    width: 33px;
    height: 33px;
    margin-left: 330px;
    border-radius: 100px;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 30%);
    transition-duration: 0.2s;
    &:active {
        background-color: #2d98da;
        box-shadow: none;
    }
    &:hover {
        cursor: pointer;
    }
`;

const MainAgreeListliButtonCli = styled.button`
    position: absolute;
    width: 33px;
    height: 33px;
    margin-left: 330px;
    border-radius: 100px;
    background-color: #2d98da;
`;

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
`;


function Signup () {
    const [isClicked0, setIsClicked0] = useState<boolean>(false);
    const [isClicked1, setIsClicked1] = useState<boolean>(false); 
    const [isClicked2, setIsClicked2] = useState<boolean>(false); 
    const [isClicked3, setIsClicked3] = useState<boolean>(false); 


    const ButtonClick = (event : React.MouseEvent<HTMLButtonElement>, select: number) => {
        if(select===0) {
            setIsClicked0(!isClicked0);
        } else if(select===1) {
            setIsClicked1(!isClicked1);
        } else if(select===2) {
            setIsClicked2(!isClicked2);
        } else {
            setIsClicked3(!isClicked3);
        }
    }
    
    return(
        <>
            <Main>
                <Img
                src="img/injiklogo2.png"
                >
                </Img>
                <MainEmail>
                    <MailHeader>번개인증</MailHeader>
                    <MainEmailButton>
                        <MainEmailButtonImg src="img/phone.png"/>
                        <span>휴대폰 인증</span>
                    </MainEmailButton>
                    <MainEmailButton>
                        <MainEmailButtonImg src="img/email.png"/>
                        <span>이메일 인증</span>
                    </MainEmailButton>
                </MainEmail>
                <MainPW>
                    <PWHeader>비밀번호&nbsp;/&nbsp;확인</PWHeader>
                    <MainPWInput
                    placeholder="* 비밀번호">
                    </MainPWInput>
                    <MainPWInput
                    placeholder="* 비밀번호 확인">
                    </MainPWInput>
                </MainPW>
                <MainAgree>
                    <AgreeHeader>약관 동의</AgreeHeader>
                    <MainAgreeList>
                        <MainAgreeListli>
                            <span
                            style={{color: "red", fontWeight: "bold"}}>(필수)&nbsp;</span>
                            <span>개인회원 약관에 동의</span>
                            {isClicked0 ? 
                            <MainAgreeListliButtonCli
                            onClick={e => ButtonClick(e,0)}>✔️</MainAgreeListliButtonCli>
                            : <MainAgreeListliButton
                            onClick={e => ButtonClick(e,0)}>✔️</MainAgreeListliButton>}
                        </MainAgreeListli>
                        <MainAgreeListli>
                            <span>(선택)&nbsp;</span> 
                            <span>개인정보 수집 및 이용에 동의</span>
                            {isClicked1 ? 
                            <MainAgreeListliButtonCli
                            onClick={e => ButtonClick(e,1)}>✔️</MainAgreeListliButtonCli>
                            : <MainAgreeListliButton
                            onClick={e => ButtonClick(e,1)}>✔️</MainAgreeListliButton>}
                        </MainAgreeListli>
                        <MainAgreeListli>
                            <span>(선택)&nbsp;</span>  
                            <span>마케팅 정보 수신 동의 - 이메일</span>
                            {isClicked2 ? 
                            <MainAgreeListliButtonCli
                            onClick={e => ButtonClick(e,2)}>✔️</MainAgreeListliButtonCli>
                            : <MainAgreeListliButton
                            onClick={e => ButtonClick(e,2)}>✔️</MainAgreeListliButton>}
                        </MainAgreeListli>
                        <MainAgreeListli>
                            <span>(선택)&nbsp;</span>
                            <span>마케팅 정보 수신 동의 - SMS/MMS</span>
                            {isClicked3 ? 
                            <MainAgreeListliButtonCli
                            onClick={e => ButtonClick(e,3)}>✔️</MainAgreeListliButtonCli>
                            : <MainAgreeListliButton
                            onClick={e => ButtonClick(e,3)}>✔️</MainAgreeListliButton>}
                        </MainAgreeListli>
                    </MainAgreeList>
                </MainAgree>
                <MainFin>
                    <MainFinButton>회원가입 완료</MainFinButton>
                </MainFin>
            </Main>
        </>
    );

}

export default Signup;