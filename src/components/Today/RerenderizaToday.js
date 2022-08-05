import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RerenderizeToday() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/Today');
    }, []);
    return (<></>);
}