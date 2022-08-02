import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";

export default function Menu() {
    const context = useContext(UserContext);
    context.setHabitPercentage(0);
    console.log(context);
    return (
        <Container>
            <Link to={`/Habbits`} ><p>Hábitos</p></Link>
            <Link to={`/Today`} ><Today><CircularProgressbar value={context.habitPercentage} text={`Hoje`} background styles={buildStyles({ backgroundColor: '#52B6FF', textColor: 'white' })} /></Today></Link>
            <Link to={`/History`} ><p>Histórico</p></Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    text-decoration: none;
`;

const Today = styled.div`
    width: 91px;
    height: 91px;
    margin: 0px 0px 40px 0px;
`;