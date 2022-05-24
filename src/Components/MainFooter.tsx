import React from "react";
import styled from "styled-components";

const UlParent = styled.ul`
    list-style: none;
    margin: 0;

    li {
        float: left;
        button {
            background-color: transparent;
            padding: 0;
            border: 0;
        }
    }
`;

const Bottom = styled.footer`
    height: 250px;
    weight: 100vw;
    background-color: #ffffff;
`;

const Bottomnav = styled.div`
height: 50px;
border-top: 2px solid #1e90ff;
border-bottom: thin solid #e5e5e5;
`;

const BottomInfo = styled(UlParent)`
height: 50px;
display: flex;
justify-content: center;
align-items: center;
li {
    margin: 0 30px;
    float: left;
    button {
        &:hover {
            opacity: 0.5;
        }
        span {
            font-size: 15px;
            color : #222;
        }
    }
}
`;

const BottomContact = styled.div`
display: flex;
justify-content: center;
height: 80px;
margin-top: 20px;
button {
    margin: 0 20px;
    padding: 0;
    border: 0;
    background-color: transparent;
}

ul {
    margin: 0 10px;
    list-style: none;
    li {
        margin: 5px;
        color : #7f8c8d;
    }
}

`;

const reload = () => {

}


function MainFooter() {
    return (
        <Bottom> 
            <Bottomnav>
                <BottomInfo>
                        <li><button><span>회사소개</span></button></li>
                        <li><button><span>인재채용</span></button></li>
                        <li><button><span>회원약관</span></button></li>
                        <li><button><span style={{fontWeight: "bold"}}>개인정보처리방침</span></button></li>
                        <li><button><span>이메일무단수집거부</span></button></li>
                        <li><button><span>채용정보 API</span></button></li>
                        <li><button><span>제휴문의</span></button></li>
                        <li><button><span>고객센터</span></button></li>
                </BottomInfo>
            </Bottomnav>
            <BottomContact>
                <button onClick={reload}>
                    <img src="img/injiklogomini.png" alt="하단로고"></img>
                </button>
                <ul>
                    <li style={{fontSize: 20}}>고객센터</li>
                    <li style={{fontSize: 30,fontWeight: "bold",color: "#2f3640"}}>2017-2023</li>
                    <li>전화 전 자주 묻는 질문을 확인하세요.</li>
                </ul>
                <ul>
                    <li>주소: 대전광역시 유성구 대학로99 충남대학교</li>
                    <li>대표이사: 홍성람</li>
                    <li>평일 09:00 ~ 18:00</li>
                </ul>
            </BottomContact>
        </Bottom>
    );

}

export default MainFooter