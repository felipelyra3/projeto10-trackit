import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Rerenderize() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/Habits');
    }, []);
    return (<></>);
}