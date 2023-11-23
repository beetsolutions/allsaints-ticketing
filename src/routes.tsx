import { Route, Routes } from 'react-router-dom'
import Tickets from "./components/tickets/Tickets";
import Ticket from "./components/tickets/Ticket";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/ticket/:id" element={<Ticket />}/>
                <Route path="/tickets" element={<Tickets />} />
            </Routes>
        </>
    )
}

export default Routing