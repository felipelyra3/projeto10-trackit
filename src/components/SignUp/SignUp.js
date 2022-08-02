import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';


export default function SignUp() {
    const [buttonText, setButtonText] = useState('Cadastrar');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function handleForm(e) {
        e.preventDefault();

        const body = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        const post = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);

        /* if (post === true) {
            post.then((answer) => {
                console.log(body);
                console.log(answer);
                navigate('/');
            });

            post.catch((error) => {
                alert('Erro. Tente novamente');
                console.log(error);
            });
            setButtonText('Cadastrar');
            console.log('fim');
        } else {
            setButtonText(<ThreeDots
                text-align="center"
                height="40"
                width="40"
                radius="9"
                color='white'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />);
        } */

        post.then((answer) => {
            console.log(body);
            console.log(answer);
            navigate('/');
        })

        post.catch((error) => {
            alert('Erro. Tente novamente');
            console.log(error);
        })

    }

    return (
        <Page>
            <img src={logo} alt="logo" />

            <Form>
                <form onSubmit={handleForm}>
                    <input type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input><br />
                    <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} required></input><br />
                    <input type="text" id="name" placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value) }} required></input><br />
                    <input type="text" id="image" placeholder="Foto" value={image} onChange={(e) => { setImage(e.target.value) }} required></input><br />

                    <Button>{buttonText}</Button>
                </form>
            </Form>
            <AlreadyAccount><Link to={`/`} >Já tem uma conta? Faça login!</Link></AlreadyAccount>
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

const AlreadyAccount = styled.span`
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