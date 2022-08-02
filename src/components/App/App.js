import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Today from "../Today/Today";
import "../../style/reset.css";

export default function App() {
    return (
        <div className='page'>
            <BrowserRouter>
                {/* Tudo que tiver uma rota entre Routes */}
                <Routes>
                    {/* Cada rota tem que estar em Route */}
                    <Route path="/" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Today" element={<Today />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}