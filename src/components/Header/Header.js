import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";

export default function Header() {
    const context = useContext(UserContext);
    return (
        <Container>
            <p>Trackit</p>
            <img src={context.userInfo.image} alt='avatar' />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    padding: 0px 18px 0px 18px;

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;