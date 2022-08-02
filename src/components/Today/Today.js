import { useLocation } from "react-router-dom";

export default function Today() {
    const location = useLocation();

    console.log(location.state);

    return (
        <>
            TODAAAAAAAAY
            {location.state.email}
        </>
    );
}