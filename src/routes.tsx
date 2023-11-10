import { Route, Routes } from 'react-router-dom'
import Tickets from "./components/tickets/Tickets";
import Ticket from "./components/tickets/Ticket";
import LoginPage from "./components/login/LoginPage";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/ticket" element={<Ticket />} />
                <Route path="/tickets" element={<Tickets />} />
            </Routes>
        </>
    )
}

export default Routing