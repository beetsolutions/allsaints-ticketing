import { Route, Routes } from 'react-router-dom'
import Tickets from "./Tickets";
import Ticket from "./Ticket";
import SignInSide from "./Login"

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignInSide />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/ticket" element={<Ticket />} />
            </Routes>
        </>
    )
}

export default Routing