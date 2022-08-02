import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export default function Login() {
    return (
        <Page>
            <img src={logo} />

            <Form>
                <form>
                    <input type="email" id="email" placeholder="E-mail"></input><br />
                    <input type="password" id="password" placeholder="Senha"></input><br />

                    <Button>Entrar</Button>
                </form>
            </Form>

            <SignUp><Link to={`/SignUp`} >Não tem conta? Cadastre-se!</Link></SignUp>

        </Page>
    );
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    img {
        width: 180px;
        height: 178.38px;
    }
`;

const Form = styled.div`
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 12px;
        margin: 12px 0px 0px 0px;
    }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    margin: 12px 0px 0px 0px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`;

const SignUp = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin: 12px 0px 0px 0px;
`;