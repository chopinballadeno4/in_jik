import SubHeader from "../Components/SubHeader";
import MainFooter from "../Components/MainFooter";
import styled from "styled-components";

const Main = styled.main`
    width: 100vw;
    height: 70vh;
`;

function Signup () {
    
    return(
        <>
            <SubHeader/>
            <Main>
                Signup
            </Main>
            <MainFooter/>
        </>
    );

}

export default Signup;