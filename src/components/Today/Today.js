import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styled from "styled-components";
import checkmark from "../../assets/images/checkmark.png"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../Contexts/UserContext";

function HabbitsJSX({ name, id, highestSequence, currentSequence, done, config, navigate }) {
    const [selectCheckmark, setSelectCheckmark] = useState(false);
    const [request, setRequest] = useState({});
    let txt = 'check';
    const body = {};

    if (done === true) {
        txt += ' selected';
    } else {
        txt = 'check';
    }

    //console.log(config);

    function toggleCheckmark() {
        if (done === false) {
            //console.log('done = false');
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config);

            promise.then((answer) => {
                setRequest(answer.data);
                //console.log(request);
                setSelectCheckmark(true);
                navigate('/RerenderizeToday');
                //console.log(request);
            });

            promise.catch((error) => {
                console.log(error);
            });
        } else if (done === true) {
            //console.log('done = true');
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config);

            promise.then((answer) => {
                setRequest(answer.data);
                //console.log(request);
                setSelectCheckmark(false);
                navigate('/RerenderizeToday');
                //console.log(request);
            });

            promise.catch((error) => {
                console.log(error);
            });
        }
        //setSelectCheckmark(!selectCheckmark);
    }

    let record = false;

    if (currentSequence === highestSequence) {
        record = true;
    }

    return (
        <Habbits>
            <Texts>
                <Title>{name}</Title>
                <Subtitle>
                    <p>Sequência atual: <CurrentSequence done={done}>{currentSequence}</CurrentSequence></p>
                    <p>Seu record: <HighestSequence>{highestSequence}</HighestSequence></p>
                </Subtitle>
            </Texts>

            <div className={txt} onClick={toggleCheckmark}><img src={checkmark} alt='checkmark' /></div>
        </Habbits>
    );
}

export default function Today() {
    const location = useLocation();
    const [request, setRequest] = useState([]);
    const [txt, setTxt] = useState('');
    const [txtClass, setTxtClass] = useState('');
    const context = useContext(UserContext);
    const dayjs = require('dayjs');
    const navigate = useNavigate();
    let qtd = 0;

    //console.log(context.userInfo);

    const config = {
        headers: {
            Authorization: `Bearer ${context.userInfo.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        promise.then((answer) => {
            setRequest(answer.data);
            //console.log('Answer: ');
            //console.log(answer.data);
            //console.log(request);
        });

        promise.catch((error) => {
            console.log(error);
        });
    }, []);

    for (let i = 0; i < request.length; i++) {
        if (request[i].done === true) {
            qtd++;
        }
    }

    context.setHabitPercentage(((qtd / request.length) * 100).toFixed());

    useEffect(() => {
        if (context.habitPercentage === 0) {
            setTxtClass('concludedHabbits');
            setTxt('Nenhum hábito concluído ainda');
        } else {
            setTxtClass('concludedHabbits concluded');
            setTxt(`${context.habitPercentage}% dos hábitos concluídos`);
        }
    }, [context.habitPercentage]);

    //console.log(request);

    return (
        <>
            <Header />

            <Page>
                <Date>{dayjs().format('dddd')}, {dayjs().format('DD/MM')}</Date>
                <div className={txtClass}>{txt}</div>

                <ContainerHabbits>
                    {request.map((habit) => (<HabbitsJSX key={habit.id} {...habit} config={config} navigate={navigate} />))}
                </ContainerHabbits>

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

    .concludedHabbits {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
        margin: 5px 0px 0px 0px;
    }

    .concluded {
        color: #8FC549;
    }
`;

const Date = styled.span`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const ConcludedHabbits = styled.span`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin: 5px 0px 0px 0px;
`;

const ContainerHabbits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 12px 0px 0px 0px;
`;

const Habbits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 12px 0px 0px 0px;
    padding: 0px 12px 0px 12px;

    .check {
        display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    }

    .selected {
        background: #8FC549;
    }
`;

const Title = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`;

const Subtitle = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`;

const Texts = styled.div``;

const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;

    selected {
        background: #8FC549;
    }
`;

const CurrentSequence = styled.span`
    color: ${props => props.done ? `#8FC549` : `#666666`};
`;

const HighestSequence = styled.span`
    color: ${props => props.record ? `#666666` : `#8FC549`};
`;