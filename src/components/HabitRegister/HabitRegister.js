import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DaysOfTheWeekJSX({ day, setDay, letter, id, selected }) {
    const [txt, setTxt] = useState('days');

    function toggleSelectedDay() {
        selected = !selected;
        if (selected === true) {
            setTxt('days selected');
        } else {
            setTxt('days');
        }
        /* console.log('selected: ' + selected);
        console.log('day[id - 1]: ');
        console.log(day[id - 1]); */
    }

    return (
        <>
            <div className={txt} onClick={toggleSelectedDay}>{letter}</div>
        </>
    );
}

export default function HabitRegister() {
    const [habitName, setHabitName] = useState('');
    const [obj, setObj] = useState({
        name: '',
        days: []
    });
    const [selectedDay, setSelectedDay] = useState(false);
    const navigate = useNavigate();
    const [days, setDays] = useState([
        { id: 0, letter: 'D', day: 'domingo', selected: false },
        { id: 1, letter: 'S', day: 'segunda', selected: false },
        { id: 2, letter: 'T', day: 'terça', selected: false },
        { id: 3, letter: 'Q', day: 'quarta', selected: false },
        { id: 4, letter: 'Q', day: 'quinta', selected: false },
        { id: 5, letter: 'S', day: 'sexta', selected: false },
        { id: 6, letter: 'S', day: 'sabado', selected: false },
    ]);

    function handleForm(e) {
        e.preventDefault();

        let allDaysSelected = [];

        for (let i = 0; i < 7; i++) {
            if (days[i].selected === true) {
                allDaysSelected.push(days[i].id);
            }
        }

        console.log(allDaysSelected);

        //navigate('/Habits');
    }

    /* function toggleSelectedDay(day) {
        console.log(day);
        day.selected = !day.selected;

        for (let i = 0; i < days.length; i++) {
            if (day.selected === true) {

            }
        }

        console.log(day);
    } */

    return (
        <>
            <Header />
            <Page>
                <Habit>
                    <Form onSubmit={handleForm}>
                        <HabitName><input type="text" id="habitName" placeholder="Nome do hábito" value={obj.name} onChange={
                            (e) => { setObj({ ...obj, name: e.target.value }) }} required></input><br /></HabitName>
                        <Days>
                            {days.map((day, index) => (<DaysOfTheWeekJSX key={index} {...day} day={days} setDay={setDays} />))}
                        </Days>
                        <HabitFooter>
                            <Link to={`/Habits`} ><Cancel>Cancelar</Cancel></Link>
                            <Button>Salvar</Button>
                        </HabitFooter>
                    </Form>
                </Habit>
            </Page>
            <Menu />
        </>
    );
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: #E5E5E5;
    padding: 90px 12px 0px 12px;
`;

const Habit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 5px;

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
        margin: 3px 0px 0px 0px;
    }
`;

const HabitName = styled.div`
    display: flex;
    margin: 0px 0px 6px 0px;
`;

const Days = styled.div`
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

    .selected {
        background: #CFCFCF;
        color: #FFFFFF;
    }
`;

const HabitFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 25px 0px 0px 0px;
`;

const Cancel = styled.span`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 12px;
`;

const Button = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;text-align: center;
    color: #FFFFFF;
    border: none;
`;