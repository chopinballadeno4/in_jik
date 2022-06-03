import React from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const Entire = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 1000px;
    background-color: ${(props) => props.theme.white1};
`;

const Main = styled.div`
    width: 40%;
    box-shadow: 0 0 8px rgb(0 0 0 / 6%);
    background-color: ${(props) => props.theme.white};
    margin: 50px auto;
`;

const Header = styled.header`
    height: 50px;
`;

const Back = styled.section`
    height: 50px;
`;

const JobInfo = styled.section`
    min-height: 500px; 
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
                <JobInfo>   
                    <Header>

                    </Header>
                </JobInfo>
            </Main>
        </Entire>
    );
}

export default Contract;