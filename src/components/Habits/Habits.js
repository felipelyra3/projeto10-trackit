import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MyHabitsJSX({ id, nome, days }) {
    let array = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < days.length; j++) {
            if (array[i] === days[j]) {
                console.log('Igual: ' + array[i]);
                console.log('days: ' + days[j]);
            }
        }
    }

    return (
        <Habit>
            <Title>Ler capítulo 1 de livro</Title>
            <ContainerDays>
                {array.map((day, index) => (<div className="days">A</div>))}
            </ContainerDays>
        </Habit>
    );
}

function DaysJSX({ day, id }) {
    let txt = '';


    return (
        <Days>
            {id}
        </Days>
    );
}

export default function Habbits() {
    const context = useContext(UserContext);
    const [request, setRequest] = useState([]);
    const [text, setText] = useState('');
    const temp = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ];

    const config = {
        headers: {
            Authorization: `Bearer ${context.userInfo.token}`
        }
    };

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        promise.then((answer) => {
            setRequest(answer.data);
            console.log(request);
        });

        promise.catch((error) => {
            console.log(error);
        });

    }, []);

    useEffect(() => {
        if (request.length === 0) {
            setText('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
        }
    });

    return (
        <>
            <Header />
            <Page>

                <MyHabits>
                    <p>Meus Hábitos</p>
                    <Link to={`/HabitRegister`} ><Button>+</Button></Link>
                </MyHabits>

                <HabitsList>
                    {temp.map((habit, index) => (<MyHabitsJSX key={index} {...habit} />))}
                </HabitsList>

                <Text>{text}</Text>

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

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`;

const Button = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
`;

const HabitsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px 0px 24px 0px;
`;

const Habit = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 12px 0px 0px 0px;
    padding: 3px 12px 3px 12px;
`;

const ContainerDays = styled.div`
    display: flex;

    .days {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin: 0px 5px 0px 0px;
    }
`;

const Days = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    margin: 0px 5px 0px 0px;
`;

const Title = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`;

const Text = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`;