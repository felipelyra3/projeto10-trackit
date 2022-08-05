import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Today from "../Today/Today";
import Habits from "../Habits/Habits";
import History from "../History/History";
import HabitRegister from "../HabitRegister/HabitRegister";
import Rerenderize from "../Habits/Rerenderize";
import RerenderizeToday from "../Today/RerenderizaToday";
import UserContext from "../Contexts/UserContext";
import "../../style/reset.css";
import { useState } from "react";

export default function App() {
    const [userInfo, setUserInfo] = useState({});
    const [habitPercentage, setHabitPercentage] = useState(0);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, habitPercentage, setHabitPercentage }}>
            <BrowserRouter>
                {/* Tudo que tiver uma rota entre Routes */}
                <Routes>
                    {/* Cada rota tem que estar em Route */}
                    <Route path="/" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Today" element={<Today />} />
                    <Route path="/Habits" element={<Habits />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/HabitRegister" element={<HabitRegister />} />
                    <Route path="/Rerenderize" element={<Rerenderize />} />
                    <Route path="/RerenderizeToday" element={<RerenderizeToday />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}