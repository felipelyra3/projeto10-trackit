import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import trashbin from "../../assets/images/trashbin.png";

function MyHabitsJSX({ id, name, days, context, navigate }) {
    const array = [
        { id: 0, letter: 'D', day: 'domingo', selected: false },
        { id: 1, letter: 'S', day: 'segunda', selected: false },
        { id: 2, letter: 'T', day: 'terça', selected: false },
        { id: 3, letter: 'Q', day: 'quarta', selected: false },
        { id: 4, letter: 'Q', day: 'quinta', selected: false },
        { id: 5, letter: 'S', day: 'sexta', selected: false },
        { id: 6, letter: 'S', day: 'sabado', selected: false },
    ];

    const array2 = array.map((day) => {
        if (days.includes(day.id)) {
            return (
                {
                    ...day,
                    selected: true
                }
            );
        }
        return day;
    });

    return (
        <Habit>
            <img src={trashbin} alt="trash" onClick={() => { DeleteHabit(id, context, navigate) }} />
            <Title>{name}</Title>
            <Days>
                {array2.map((day) => (<Day selected={day.selected} >{day.letter}</Day>))}
            </Days>
        </Habit>
    );
}

function DeleteHabit(id, context, navigate) {
    console.log('Delete: ' + id);
    const confirm = window.confirm('Tem certeza que deseja excluir este hábito?');

    if (confirm === true) {
        const config = {
            headers: {
                Authorization: `Bearer ${context.userInfo.token}`
            }
        };

        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        promise.then(() => {
            alert('Hábito deletado com sucesso!');
            navigate('/Rerenderize');
        });
        promise.catch((error) => { console.log(error) });
    }

    return (
        <></>
    );
}

export default function Habbits() {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const [request, setRequest] = useState([]);
    const [text, setText] = useState('');

    const config = {
        headers: {
            Authorization: `Bearer ${context.userInfo.token}`
        }
    };

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        promise.then((answer) => {
            setRequest(answer.data);
            console.log(answer.data);
        });

        promise.catch((error) => {
            console.log(error);
        });

    }, []);

    useEffect(() => {
        if (request.length === 0) {
            setText('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!');
        } else {
            setText('');
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
                    {request.map((habit, index) => (<MyHabitsJSX key={index} {...habit} context={context} navigate={navigate} />))}
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
    position: relative;

    img {
        position: absolute;
        top: 5px;
        right: 8px;
    }
`;

const Days = styled.ul`
    display: flex;
`;

const Day = styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background: ${props => props.selected ? `#CFCFCF` : `#FFFFFF`};
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => props.selected ? `#FFFFFF` : `#DBDBDB`};
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