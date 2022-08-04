import styled from "styled-components";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function History() {
    return (
        <>
            <Header />
            <Page>
                <Title>Histórico</Title>
                <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle>
            </Page>
            <Menu />
        </>
    );
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: #E5E5E5;
    padding: 90px 12px 0px 12px;
`;

const Title = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const SubTitle = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin: 12px 0px 0px 0px;
`;